const app = require('./app');
const http = require('http');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './.env' });

const DB = process.env.DB_URI.replace('<USERNAME>', process.env.DB_USER).replace('<PASSWORD>', process.env.DB_PASSWORD);

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

mongoose.connect(DB, {
  // useNewUrlParser: true,
  // useCreteIndex: true,
  // useFindAndModify: false,
  // useUnifiedTopology: true
}).then(() => {
  console.log('DB connection successful');
}).catch(err => {
  console.log('DB connection failed');
  console.log(err);
}); 

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
