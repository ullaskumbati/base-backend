// require('dotenv').config()

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB().then(()=>{
    app.listenerCount(process.env.PORT || 8000,()=>{
        console.log(`server is running at : ${process.env.PORT}`)
    });
}).catch((err)=>{
    console.log("Mongo connection failed",err)
});



/*
import express from "express";

const app = express();


( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("err:", error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        }
        )
    }catch(error){
        console.error("error:",error)
        throw err
    }
})()
    */