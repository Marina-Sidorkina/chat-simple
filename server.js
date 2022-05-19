const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});


const rooms = new Map();

app.get('/rooms', (request, response) => {
  rooms.set('hello', '');
  response.json(rooms);
});

io.on('connection', socket => {
  console.log('socket connected', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });
});

server.listen(9999, (error) => {
  if (error) throw Error(error);
  console.log('App started');
});
