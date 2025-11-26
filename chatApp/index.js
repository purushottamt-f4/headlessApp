import Chatroom from "./chatRoom.js";

const chat = new Chatroom();

chat.on('join',(user)=>{
    console.log(`${user} has join chat room`);
});

chat.on('message',(user,message)=>{
    console.log(`${user} : ${message}`);
});

chat.on('leave',(user)=>{
    console.log(`${user} has left chat room`);
});

chat.join('puru');
chat.join('sam');

chat.sendMessage('puru','hey sam, hellow to everyone');
chat.sendMessage('sam','hey sam, hellow to everyone');

chat.leave('puru');
chat.sendMessage('puru','this message not sent');

chat.leave('sam');