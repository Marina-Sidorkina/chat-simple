const express = require('express');
const app = express();

const rooms = new Map();

app.get('/rooms', (request, response) => {
  console.log('Hello!');
  response.json(rooms);
});

app.listen(9999, (error) => {
  if (error) throw Error(error);
  console.log('App started');
});
