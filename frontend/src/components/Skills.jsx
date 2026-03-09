import { Plus, Sparkle, X } from 'lucide-react';
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { API_URL } from "../store"

const Skills = ({data,onChange}) => {
    const [newSkill,setNewSkill]=useState('');
    const [loading,setLoading]=useState(false)

    const addSkill=()=>{
        if(newSkill.trim() && !data.includes(newSkill.trim())){
            onChange([...data,newSkill.trim()])
            setNewSkill("")
        }
    }



     const enhanceSkill = async () => {
    if (!newSkill.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/ai/enhanceskill`, {
        userContent: newSkill.trim(),
      });
      setNewSkill(res.data.enhancedContent); // put AI-enhanced skill into input
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Failed to enhance skill. Try again later.");
    }
    setLoading(false);
  };
    const removeSkill=(indextoremove)=>{
            onChange(data.filter((_,index)=>index!==indextoremove))
    }


    const handleKeyPress=(e)=>{
        if(e.key==="Enter"){
            e.preventDefault();
            addSkill()
        }
    }
  return (
    <div className='space-y-4'>
       <div>
        <h2 className='flex items-center gap-2 text-lg font-semibold text-gray-700'>Skills</h2>
        <p className='text-sm text-gray-400'>Add your technical and softskill</p>
       </div>


       <div className='flex gap-2'>
          <input type="text" className='flex-1 px-3 py-2 text-sm'  placeholder='Enter a skill' onChange={(e)=>setNewSkill(e.target.value)}  value={newSkill}  onKeyDown={handleKeyPress}/>
           <button
          onClick={enhanceSkill}
          disabled={!newSkill.trim() || loading}
          className="px-3 py-2 text-sm bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Enhancing..." : "AI Enhance"}
        </button>
          <button onClick={addSkill}  disabled={!newSkill.trim} className='flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disable:opacity-50 disable:cursor-not-allowed'>
            <Plus className='size-4'/>
          </button>

          
       </div>

       {data.length > 0 ? (
   <div className='flex flex-wrap gap-2'>
      {data.map((skill,index)=>(
         <span 
           key={index}
           className='flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-600 rounded-full text-sm'
         >
            {skill}
            <button 
              onClick={()=>removeSkill(index)} 
              className='ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors'
            >
              <X className='w-3 h-3'/>
            </button>
           
         </span>
      ))}
   </div>
) : (
   <div className='text-center text-gray-500 py-6'>
      <Sparkle className='w-10 h-10 mx-auto text-gray-500'/>
      <p>No skills added yet</p>
      <p>Add technical and soft skills above</p>
   </div>
)}
       
    </div>
  )
}

export default Skills
