import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets';
import ResumePreview from '../components/ResumePreview';
import Loader from '../components/Loader';
import { ArrowLeft, ArrowLeftIcon } from 'lucide-react';


const Preview = () => {
  const {resumeid}=useParams();
  const [resumeData,setResumeData]=useState(null);
  const [isLoading,setIsLoading]=useState(true)
  const loadData=async()=>{
      setResumeData(dummyResumeData.find(resume=>resume._id===resumeid||null))
  }


  useEffect(()=>{
    loadData()
  },[])


  return  resumeData ?(
    <div className='bg-slate-100'>
           <div className='max-w-3xl mx-auto py-10'>
                <ResumePreview  data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} className="bg-white py-5"/>
           </div>
    </div>
  ):(
    <div>
        {isLoading ? <Loader/> :
           <div className='flex flex-col items-center justify-center h-screen'>
            <p>Resume not found</p>
            <a href="">
              <ArrowLeftIcon className='size-4 mr-2'/>
              go to home page
            </a>
           </div>
        }
    </div>
  )
}

export default Preview
