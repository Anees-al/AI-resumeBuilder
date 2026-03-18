import axios from 'axios'
import { Sparkle } from 'lucide-react'
import React from 'react'
import { useAuthStore } from '../store'
import { useState } from 'react'
import { API_URL } from '../store'

const ProfessionalSummary = ({data,onChnage,setResumeData}) => {
  
  const [loading,setLoading] = useState(false)

  const enhance=async()=>{
    setLoading(true)
    try {
      const res=await axios.post(`${API_URL}/ai/enhance-summary`,{userContent:data})
      console.log(res)
      setResumeData((prev) => ({
        ...prev,
        professional_summary: res.data.enhancedContent
      }))
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
           <div>
            <h1 className='flex items-center gap-2 text-lg font-semibold text-gray-500'>Professional Summary</h1>
            <p className='text-sm text-gray-500'>Add summary to your resume</p>
           </div>
           <button onClick={enhance} className='flex items-center gap-2 px-3 py-2 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disable:opacity-50' disabled={loading}>

            <Sparkle className='size-4'/>
            {loading ? "Generating..." : "AI Enhance"}
           </button>
      </div>


      <div className='mt-7'>
<textarea  rows={8} value={data }   onChange={(e)=>onChnage(e.target.value)} className='w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none' placeholder='enter ypur professional summary here'/>
    <p className='text-xs text-gray-400 max-w-4/5 mx-auto text-center'>Tip:focus on your relevant achievment and skills</p>
      </div>
    </div>
  )
}

export default ProfessionalSummary
