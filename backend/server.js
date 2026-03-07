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

const allowedOrigins = [
  //'http://localhost:5173', // development
  'https://ai-resume-builder-pearl-ten.vercel.app' // production
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin like Postman
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy does not allow access from this origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
app.use(express.json())
app.use(cookieParser())


app.use('/api/user',userRoutes);
app.use('/api/resume',resumeRoutes);
app.use('/api/ai',aiRoutes);


const port =process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running in the port ${port}`)
    
})