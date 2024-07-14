require('dotenv').config();
import express from 'express';
import DbConnect from './config/DbConn';
import mongoose from 'mongoose';
import cors from 'cors'
const app = express()


const PORT = process.env.PORT || 3500;

DbConnect()
app.use(cors())
app.use(express.json())
app.use('/api/user', require('./ Routes/userRoutes'))
//app.use('/api/notes', require('./ Routes/'))




mongoose.connection.once('open',()=>{
    console.log("MongoDb Connected")
    app.listen(()=>{
        console.log(`server running ${PORT}`)
    })    
})
mongoose.connection.on('error', err =>{
console.log(err)

}
)
