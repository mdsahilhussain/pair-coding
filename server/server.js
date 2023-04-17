const express = require("express");
const app = express();
const http = require("http");
const io = require("socket.io")(http);
const cors = require("cors");
const {} = require;

const port = 5000;
app.use(cors());

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server running on ${port}`);
});

io.on("connection", (socket) => {
  log("connected");
  socket.on("message", (evt) => {
    log(evt);
    socket.broadcast.emit("message", evt);
  });
});
io.on("disconnect", (evt) => {
  log("some people left");
});
