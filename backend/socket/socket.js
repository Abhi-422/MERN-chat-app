import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: ['http://localhost:3000', 'https://chat-422-app.netlify.app'],
        methods: ['GET', 'POST'],
        credentials: true,
    }
});

export const getRecieveSocketId = (recieverId) =>{
    return userSocketMap[recieverId];
};

const userSocketMap = {}; //{userId: socketId}

io.on('connection', (socket) => {
    console.log('user connected', socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    // io.emit() is used to send event to all the connected clients...
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    
    // socket.on is used to listen the events, can be used on both client and server side...
    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, io, server };