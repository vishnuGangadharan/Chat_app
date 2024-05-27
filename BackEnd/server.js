import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from './routes/authRoutes.js';
import connectToMongoDB from "./DB/connectToDB.js";
import messageRoute from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()
const app = express()

app.use(express.json()); //to parse the incoming request with Json payload (from req.body)
app.use(cookieParser()) // to access cookies in middileware to check varification
app.get('/',(req,res)=>{
    res.send('homedd')
})

app.use('/api/auth',authRoute)
app.use('/api/messages',messageRoute)
app.use('/api/users',userRoutes)

const PORT =process.env.PORT || 3000;
app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`application running on ${PORT}`)
})
