import ai from "../config/ai.js";



export const enhanceProfessionalSumary=async(req,res)=>{
      try {
        const {userContent}=req.body;
        if(!userContent){
            return res.status(400).json({message:"user not write the summary"});
        }

       const response= await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
       messages: [
        {   role: "system",
            content:` you are an expert in resume writing.your task is to enhance the professional summary of a resume.The summary should be 1-2 sentance
             also highlighting key skills,experience and career objectivly .Make it compelling and ATS-friendly and only restun text no option or anything else`
        },
        {
            role: "user",
            content: userContent,
        },
    ],
        })


        const enhancedContent=response.choices[0].message.content;
        return res.status(200).json({message:'successfully get the content',enhancedContent})
      } catch (error) {
         return res.status(400).json({message:error.message});
      }
}





export const enhanceJobDescripction=async(req,res)=>{
      try {
        const {userContent}=req.body;
        if(!userContent){
            return res.status(400).json({message:"user not write the summary"});
        }

       const response= await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
       messages: [
        {   role: "system",
            content:`You are an expert in resume writing.Your task is enhance the job description of a resume.The job 
            descripction should be only in 1-2 sentance also highlight the key responsiblities and achievments.Use action
             verbs and quantifiable result where possible.Make it ats friendly and only return text no option or anything eles`
        },
        {
            role: "user",
            content: userContent,
        },
    ],
        })


        const enhancedContent=response.choices[0].message.content;
        return res.status(200).json({message:'successfully get the content',enhancedContent})
      } catch (error) {
         return res.status(400).json({message:error.message});
      }
}