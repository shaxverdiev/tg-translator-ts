import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import TelegramApi from 'node-telegram-bot-api';
import { token, bot } from './bot/bot';

const PORT = 9000

const eServer = express();
const httpServer = new http.Server(eServer);
const wsIO = new Server(httpServer, {
  cors: {
    origin: "*"
  }
}); 

// testing http query
eServer.get('/apishka', (req, res) => {
  res.send(JSON.stringify('http query is work..'))
})


  bot.on('message', (msg) => {
    console.log(msg.text);
    console.log(msg.chat.username)
      return <string>(msg.text)
  });


const mess = 'hello clinet, i am message from websocket.'


// when somebody connect to client - execute next code
wsIO.on('connection', (socket: Socket) => {
  console.log('new User connected..');


  bot.on('message', (msg) => {
    console.log(msg.text);
    console.log(msg.chat.username)
    socket.send({
      name: msg.chat.username,
      message: msg.text
    })
  });



  //when somebody disconnect
  socket.on('disconnect', () => {
    console.log('user - disconnected..');
  });
});






httpServer.listen(PORT, () => {
  console.log(`server start on ${PORT} port...`);
});
