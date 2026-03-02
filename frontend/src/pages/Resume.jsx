import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, FileText, FolderIcon, GraduationCap, SkipBack, Sparkle, User } from 'lucide-react'
import PersonalInfo from '../components/PersonalInfo'
import ResumePreview from '../components/ResumePreview'
import TempalteSelector from '../components/templates/TempalteSelector'
import ColorPicker from '../components/ColorPicker'
import ProfessionalSummary from '../components/ProfessionalSummary'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Resume = () => {

 const {resumeid}=useParams()
  const [resumeData,setResumeData]=useState({
    _id:'',
    title:'',
    professional_summary:'',
    personal_info:{
     full_name: '',
    email: '',
    phone: '',
    location: '',
    profession: '',
    image: null
    },
    experience:[],
    education:[],
    projects:[],
    skills:[],
    template:'classic',
    accent_color:"#3b82f6",
    public:false
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
  {id:"projects",name:"Project",icon:FolderIcon},
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
                         <div className='flex items-center'>
                          <TempalteSelector  selectedTemplate={resumeData.template} onChange={(template)=>setResumeData(prev=>({...prev,template}))}/>
                            <ColorPicker  selectedColor={resumeData.accent_color}  onChange={(color)=>setResumeData(prev=>({...prev,accent_color:color}))}/>
                         </div>


                         <div className='flex items-center'>
                     {activeSectionIndex!==0&&(
                      <button onClick={()=>setActiveSectionIndex(prev=>Math.max(prev-1,0))} className='flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-200 transition-all'  disabled={activeSectionIndex===0}>
                        <ChevronLeft className='size-4'/>Previous
                      </button>
                     )}


                     

                      <button onClick={()=>setActiveSectionIndex(prev=>Math.min(prev+1,section.length-1))} className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-200 transition-all  ${activeSectionIndex===section.length-1   && 'opacity-50'}`}  disabled={activeSectionIndex===section.length-1}>
                       Next <ChevronRight className='size-4'/>
                      </button>
                         </div>
                       </div>



                       <div className='space-y-6'>
                        {
                          activeSection.id=== 'personal' &&(
                            <PersonalInfo data={resumeData.personal_info} onChange={(data)=>setResumeData(prev=>({...prev,personal_info:data}))}   removeBackground={removeBackground}   setRemoveBackground={setRemoveBackground}/>
                          )
                        }


                        {
                          activeSection.id==="summary"&&(
                            <ProfessionalSummary  data={resumeData.professional_summary}  setResumeData={setResumeData}   onChnage={(data)=>setResumeData(prev=>({...prev,professional_summary:data}))}/>
                          )
                        }



                        {
                          activeSection.id==="experience" && (
                            <Experience data={resumeData.experience}  onChange={(data)=>setResumeData(prev=>({...prev,experience:data}))} setResumeData={setResumeData}/>
                          )
                        }


                        {
                          activeSection.id==="education" && (
                            <Education data={resumeData.education}  onChange={(data)=>setResumeData(prev=>({...prev,education:data}))} setResumeData={setResumeData}/>
                          )
                        }


                        {
                          activeSection.id==="projects" && (
                            <Projects data={resumeData.projects}  onChange={(data)=>setResumeData(prev=>({...prev,projects:data}))} />
                          )
                        }




                        {
                          activeSection.id==="skills" && (
                            <Skills data={resumeData.skills}  onChange={(data)=>setResumeData(prev=>({...prev,skills:data}))} />
                          )
                        }



                        
                       </div>
                       <button className='bg-gradient-to-br from-blue-100 to-blue-200 ring ring-blue-600 text-blue-600 hover:ring-blue-500 transition-all rounded-md px-6 py-2 mt-6 text-sm'>Save Changes</button>
                     </div>


                   </div>


                   {/*right*/}
                   <div className='lg:col-span-7 max-lg:mt-6'>
                       <div>
                        {/*buttons*/}
                       </div>

                       <div>
                        <ResumePreview  data={resumeData} template={resumeData.template}  accentColor={resumeData.accent_color}/>
                       </div>

                   </div>
             </div>
      </div>
    </div>
  )
}

export default Resume
