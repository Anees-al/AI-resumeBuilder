
import resumeModel from "../models/resumeModel.js";
import imagekit from "../config/imagekit.js";
import fs from 'fs'


export const createResume=async(req,res)=>{
    try {
        const userId=req.userId;
        const {title}=req.body;

        const newResume=await resumeModel.create({userId,title});
        return res.status(201).json({message:'successfully create new resume',newResume});
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}


export const deleteResume=async(req,res)=>{
    try {
        const userId=req.userId;
        const {resumeId}=req.params;
        await resumeModel.findByIdAndDelete({userId,_id:resumeId})
        

        return res.status(200).json({message:'delete resume successfully'});
    } catch (error) {
         return res.status(400).json({message:error.message})
    }
}


export const getResumeById=async(req,res)=>{
    try {
        const userId=req.userId;
        const {resumeId}=req.params;
        const resume=await resumeModel.findOne({userId,_id:resumeId});

        if(!resume){
            return res.status(400).json({message:'not geting resume with this id'});


        }


        return res.status(200).json({message:'succesfully get the resume',resume})
    } catch (error) {
         return res.status(400).json({message:error.message})
    }
}



export const getPublicResumeId=async(req,res)=>{
    try {
         const {resumeId}=req.params;
         const resume=await resumeModel.findOne({public:true,_id:resumeId});


          if(!resume){
            return res.status(400).json({message:'not geting resume with this id'});


        }


        return res.status(200).json({message:'succesfully get the resume',resume})

    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}




export const updateResume=async(req,res)=>{
    try {
       const userId=req.userId;
       const {resumeData,resumeId,removeBackground}=req.body
       const image=req.file;
       const resumeDataCopy=JSON.parse(JSON.stringify(resumeData))

       if(image){
        const bufferimage=fs.createReadStream(image.path)
        const response = await imagekit.files.upload({
             file: bufferimage,
              fileName: 'resume.png',
              folder:'user-resume',
              transformation:{
                pre:'w-300 h-300 fo-face z-0.75'+
                (removeBackground ?',e-bgremove':'')
              }
          });


          resumeDataCopy.personal_info.image=response.url
       }
       const resume=await resumeModel.findOneAndUpdate({ _id: resumeId, userId },resumeDataCopy,{new:true})
       return res.status(200).json({message:'successfully update the resume',resume})
    } catch (error) {
        return res.status(400).json({message:error.message}) 
    }
}