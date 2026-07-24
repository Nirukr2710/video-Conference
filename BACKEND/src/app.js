import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketmanager.js";
import cors from "cors";
import userRoutes from "./routes/usersroute.js";
import { connect } from "node:http2";

const app = express();

const server= createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || 2020))
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

// if an old api is updated so we use syntax lyk this
app.use("/api/v1/users",userRoutes);

// app.get ("/home",(req,res)=>{
//     return res.json({"hello" : "world"})
// });
  const start = async()=>{
    app.set("mongo_user")
    const connectionDb = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGO Connected DB Host : ${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log("listening on port 2020")
    });
  }
  start();