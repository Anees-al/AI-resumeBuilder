import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, FileText, FolderIcon, GraduationCap, SkipBack, Sparkle, User } from 'lucide-react'

const Resume = () => {

 const {resumeid}=useParams()
  const [resumeData,setResumeData]=useState({
    _id:'',
    title:'',
    professionalsummary:'',
    experience:[],
    education:[],
    projects:[],
    skills:[],
    template:'classic',
    accentcolor:"#3b82f6",
    public:'false'
  })


  const [activeSectionIndex,setActiveSectionIndex]=useState(0);
  const [removeBackground,setRemoveBackground]=useState(false)



  const loadResume=async()=>{
    const resume=dummyResumeData.find(resume=>resume._id===resumeid);
    if(resume){
      setResumeData(resume)
      document.title=resume.title
     
    }
  }



  useEffect(()=>{
loadResume()
  },[])
const section=[
  {id:"personal",name:"personal info",icon:User},
  {id:"summary",name:"sumamry",icon:FileText},
  {id:"experience",name:"Experience",icon:Briefcase},
  {id:"education",name:"Education",icon:GraduationCap},
  {id:"project",name:"Project",icon:FolderIcon},
  {id:"skills",name:"Skill",icon:Sparkle}


]


const activeSection=section[activeSectionIndex]


 
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-6'>
        <Link to='/app' className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all'>
        <ArrowLeftIcon className='size-4'/> Back to the dashboard
        </Link>
      </div>


      <div className='max-w-7xl mx-auto px-4 pb-8'>
             <div className='grid lg:grid-cols-12 gap-8'>

              {/*left */}
                   <div className='relative lg:col-span-5 rounded-lg overflow-hidden'>
                     <div className='bg-white rounded-lg shadow-sm border border-gray-500 p-6 pt-3'>
                       <hr className='absolute top-0 left-0 right-0 border border-gray-200' />

                       <hr  className='absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 border-none transition-all duration-200'  style={{width:`${activeSectionIndex*100/(section.length-1)}%`}}/>


                       {/*section  navigation*/}
                       <div className='flex justify-between items-center mb-6 border-b border-gray-500 py-1'>
                         <div>
                          
                         </div>


                         <div className='flex items-center'>
                     {activeSectionIndex!==0&&(
                      <button onClick={()=>setActiveSectionIndex(prev=>Math.max(prev-1,0))} className='flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-200 transition-all'  disabled={activeSectionIndex===0}>
                        <ChevronLeft className='size-4'/>Previous
                      </button>
                     )}

                      <button onClick={()=>setActiveSectionIndex(prev=>Math.min(prev+1,section.length-1))} className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-200 transition-all  ${activeSectionIndex===section.lenght-1   && 'opacity-50'}`}  disabled={activeSectionIndex===section.length-1}>
                       Next <ChevronRight className='size-4'/>
                      </button>
                         </div>
                       </div>
                     </div>


                   </div>


                   {/*right*/}
                   <div>

                   </div>
             </div>
      </div>
    </div>
  )
}

export default Resume
