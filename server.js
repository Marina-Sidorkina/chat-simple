const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const rooms = new Map();

app.get('/rooms', (request, response) => {
  rooms.set('hello', '');
  response.json(rooms);
});

io.on('connection', socket => {
  console.log('socket connected', socket.id);
});

server.listen(9999, (error) => {
  if (error) throw Error(error);
  console.log('App started');
});
