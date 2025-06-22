import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';


import connectMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT;


app.use(express.json()); // to parse the incoming requests with JSON payload from req.body
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, ()=>{
    mongoose.set('debug', true);
    connectMongoDB();
    console.log("listening on port",PORT)
});