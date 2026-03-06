import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDb from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import resumeRoutes from './routes/resumeRoutes.js'
import aiRoutes from './routes/aiRoutes.js'


dotenv.config()
const app=express();
connectDb()

app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);
app.use(express.json())
app.use(cookieParser())


app.use('/api/user',userRoutes);
app.use('/api/resume',resumeRoutes);
app.use('/api/ai',aiRoutes);


const port =process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running in the port ${port}`)
    
})