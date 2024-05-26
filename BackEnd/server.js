import express from "express";
import dotenv from "dotenv";

import authRoute from './routes/authRoutes.js';
import connectToMongoDB from "./DB/connectToDB.js";

 
dotenv.config()
const app = express()

app.use(express.json()); //to parse the incoming request with Json payload (from req.body)

app.get('/',(req,res)=>{
    res.send('homedd')
})

app.use('/api/auth',authRoute)

const PORT =process.env.PORT || 3000;
app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`application running on ${PORT}`)
})
