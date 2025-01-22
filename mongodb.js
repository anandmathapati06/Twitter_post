import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()

async function DBconnection(){
    mongoose.connect(process.env.MONGO_DB_URI)
    .then(e => console.log("DB connected"))
    .catch((err) => {
        console.log("error while connecting DB",err);
        
    })
} 

const mongoScheme = mongoose.Schema({
    data : Array
})

const mongoModel = mongoose.model("kagga",mongoScheme)

export {DBconnection,mongoModel}