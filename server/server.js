require('../config/config');

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('Connected to New user!');

  socket.emit('newMessage', {
    from:  'riya',
    text: 'What is going on?',
    createdAt: 123123
  });

  socket.on('createMessage', (newMessage) => {
    console.log("createMessage",newMessage);
  });

  socket.on('disconnect', () => {
    console.log('User was Disconnected!')
  })
});


server.listen(port, () => {
  console.log(`Started on port ${port}!`);
});

module.exports = {app};