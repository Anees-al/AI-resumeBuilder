import jwt from 'jsonwebtoken';


export const authenticate=async(req,res,next)=>{
  
    try {
        const token = req.cookies.token; 

        if (!token) {
            return res.status(401).json({
                message: "No token in cookies"
            });
        }


        const decode=jwt.verify(token,process.env.JWT_SECRET);
        req.userId=decode.userId
        next();

    } catch (error) {
        return res.status(400).json({message:error.message})
    }
  }
