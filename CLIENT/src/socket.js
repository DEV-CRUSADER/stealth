import io from "socket.io-client";

let socket;

const connectSocket = (user) => {
  socket = io("http://localhost:3000", {
    query: `user_id=${user}`,
  });

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });

  return socket;
}

export { connectSocket, socket };