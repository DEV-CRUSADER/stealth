const app = require("./app");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

const { Server } = require("socket.io");
const User = require("./models/user");
const FriendRequest = require("./models/friendRequest");

dotenv.config({ path: "./.env" });

const DB = process.env.DB_URI.replace(
  "<USERNAME>",
  process.env.DB_USER
).replace("<PASSWORD>", process.env.DB_PASSWORD);

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreteIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true
  })
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log("DB connection failed");
    console.log(err);
  });

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", async (socket) => {
  const { user } = socket.handshake.query("user_id");
  const socket_id = socket.id;

  if (process.env.NODE_ENV === "development") {
    console.log("A user connected", user);
    console.log("Socket ID", socket_id);
    console.log("Handshake", JSON.stringify(socket.handshake.query));
  }

  if (Boolean(user)) {
    await User.findByIdAndUpdate(user, { socket_id });
  }

  socket.on("friend_request", async (data) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Friend Request", data.to);
    }

    const to = await User.findById(data.to).select("socket_id");
    const from = await User.findById(data.from).select("socket_id");

    await FriendRequest.create({
      sender: data.from,
      receiver: data.to,
    });

    io.to(to.socket_id).emit("new_friend_request", {
      from: data.from,
      to: data.to,
      message: "New friend request",
    });

    io.to(from.socket_id).emit("request_sent", {
      from: data.from,
      to: data.to,
      message: "Friend request sent",
    });
  });

  socket.on("accept_request", async (data) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Accept Request", data.to);
    }

    const request_doc = await FriendRequest.findOne(data.request_id);

    console.log(request_doc);

    const sender = await User.findById(request_doc.sender).select("socket_id");
    const receiver = await User.findById(request_doc.receiver).select(
      "socket_id"
    );

    sender.friends.push(receiver._id);
    receiver.friends.push(sender._id);

    await receiver.save({ new: true, validateModifiedOnly: true });
    await sender.save({ new: true, validateModifiedOnly: true });

    await FriendRequest.findByIdAndDelete(data.request_id);

    io.to(sender.socket_id).emit("request_accepted", {
      from: sender._id,
      to: receiver._id,
      message: "Friend request accepted",
    });
  });

  // Handle text and link messages
  socket.io('text_message', (data) => {
    console.log('Recieved message', data)

    // data = {to, from, message, file}

    // TODO: rest of the logic
  })

  socket.io('file_message', (data) => {
    console.log('Recieved message', data)

    // data = {to, from, message, file}

    const fileExtension = path.extname(data.file);
    const fileName = `${Date.now()}_${Math.floor(Math.random() * 1000)}${fileExtension}`;

    // TODO: rest of the logic for AWS - s3 upload file to server and send link to client
  })

  socket.on("end", async (data) => {
    if (data.user_id) {
      await User.findByIdAndUpdate(data.user_id, { status: "Offline" });
    }

    // Brodcasting user disconnected
    socket.broadcast.emit("user_disconnected", data.user_id);

    console.log("User disconnected", data);
    socket.disconnect(0);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
