import ImageKit from '@imagekit/nodejs'
import dotenv from 'dotenv'
dotenv.config()

const imagekit = new ImageKit({
  privateKey: process.env.PRIVATE_KEY
});



export default imagekit