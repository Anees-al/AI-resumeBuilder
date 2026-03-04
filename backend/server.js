import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDb from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import resumeRoutes from './routes/resumeRoutes.js'


dotenv.config()
const app=express();
connectDb()


app.use(cors())
app.use(express.json())
app.use(cookieParser())


app.use('/api/user',userRoutes);
app.use('/api/resume',resumeRoutes)


const port =process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running in the port ${port}`)
    
})