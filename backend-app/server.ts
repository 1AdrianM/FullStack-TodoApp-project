require('dotenv').config();
import express from 'express';

const app = express()
const PORT = process.env.PORT || 3500;

app.listen(()=>{
    console.log(`server running ${PORT}`)
})
