import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';
dotenv.config();

import userRoutes from "./routes/user.routes.js"
import sellerRoutes from "./routes/seller.routes.js"
import { connectCloudinary } from './config/cloudinary.js';

const app=express();

connectDB()

connectCloudinary()

const allowedOrigins=["http://localhost:5173"]

//middlewares 
app.use(express.json());
app.use(cors({origin:allowedOrigins,credentials:true}));
app.use(cookieParser());


//Api Endpoints
app.get('/', (req,res)=>{
  res.send("Hello world");
})

app.use("/api/user",userRoutes)
app.use("/api/seller",sellerRoutes)

const PORT=process.env.PORT || 4000;

app.listen (PORT,()=>{
  console.log(`Server running on port ${PORT}`);
})

