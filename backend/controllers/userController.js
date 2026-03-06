import userModel from "../models/userModel.js";
import   bcrypt from 'bcryptjs'
import   jwt from 'jsonwebtoken'
import resumeModel from "../models/resumeModel.js";


export const createUser=async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        if(!username||!email||!password){
            return res.status(400).json({message:'please fill all the fields'})
        }

        const user=await userModel.findOne({email});
        if(user){
            return res.status(400).json({message:'User already existing in the database'})
        }

        const hashpassword= await bcrypt.hash(password,10);

        const newUser=await userModel.create({
            username,email,password:hashpassword
        })


          const token = jwt.sign(
      { userId: newUser._id},
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );


    res.cookie('token',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite:process.env.NODE_ENV === 'production' ?'none':'strict',
        maxAge:7*24*60*60*1000
    })





        return res.status(201).json({message:'successfully created the user',newUser,token})
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}


export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({message:'please fill all the fields'})
        }


        const user=await userModel.findOne({email})

        if(!user){
            return res.status(400).json({message:'user not registered go to sign up'});
        }



        const comparepassword=await bcrypt.compare(password,user.password);
        const token = jwt.sign(
      { userId: user._id},
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );


    res.cookie('token',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite:process.env.NODE_ENV === 'production' ?'none':'strict',
        maxAge:7*24*60*60*1000
    })
        return  res.status(200).json({message:'successfully get the user',user,token})
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}



export const logout=async(req,res)=>{
    try {
        res.clearCookie('token',{
              httpOnly:true,
            sameSite: "lax"
        })
       return res.status(200).json({message:'successfully logout'})
    } catch (error) {
       return res.status(400).json({message:error.message})
    }
}



export const getUserById=async(req,res)=>{
    try {
        const userId=req.userId;
        const user=await userModel.findById(userId);
        if(!user){
            return res.status(400).json({message:'no user found in this id'})
        }

        user.password=undefined;
        return res.status(200).json({message:'sucessfully get the user',user})
    } catch (error) {
         return res.status(400).json({message:error.message})
    }
}



export const getUserResume=async(req,res)=>{
    try {
       const userId=req.userId;;
       const resume =await resumeModel.find({userId});

       if(!userId){
        return res.status(400).json({message:'not resume found in this user'});
       }


       return res.status(200).json({message:'succefully get the resume',resume})
    } catch (error) {
         return res.status(400).json({message:error.message})
    }
}