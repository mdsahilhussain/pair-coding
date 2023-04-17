const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io")
app.use(cors());

const server = http.createServer(app);

const io = new Server(server,{
  cors:{
    origin:"http://"
  }
})

server.listen(3000, () => {
  console.log("server running");
});
