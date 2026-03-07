import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, DownloadIcon, EyeIcon, EyeOffIcon, FileText, FolderIcon, GraduationCap, Share2Icon, SkipBack, Sparkle, User } from 'lucide-react'
import PersonalInfo from '../components/PersonalInfo'
import ResumePreview from '../components/ResumePreview'
import TempalteSelector from '../components/templates/TempalteSelector'
import ColorPicker from '../components/ColorPicker'
import ProfessionalSummary from '../components/ProfessionalSummary'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import axios from 'axios'
import { useAuthStore } from '../store'
import { toast } from 'react-toastify'

const Resume = () => {

 const {resumeid}=useParams()
 const {API_URL}=useAuthStore()
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
    project:[],
    skills:[],
    template:'classic',
    accent_color:"#3b82f6",
    public:true
  })


  const [activeSectionIndex,setActiveSectionIndex]=useState(0);
  const [removeBackground,setRemoveBackground]=useState(false)



  const loadResume=async()=>{
    try {
      const {data}=await axios.get(`${API_URL}/api/resume/get/`+resumeid,{ withCredentials: true });
      
      if(data.resume){
       setResumeData({
        ...data.resume,
        project: data.resume.project || [],  
        experience: data.resume.experience || [],
        education: data.resume.education || [],
        skills: data.resume.skills || [],
      })
        document.title=data.resume.title;
      }
    } catch (error) {
      console.log(error.message)
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


const changeResumeVisiblity=async()=>{
  try {
    const formdata=new FormData()
    formdata.append("resumeId",resumeid)
   formdata.append("resumeData",JSON.stringify({public:!resumeData.public}))
  
    const {data}=await axios.put(`${API_URL}/api/resume/update`,{
        resumeId: resumeid,
        resumeData: { public: !resumeData.public }
      },{ withCredentials: true });
    setResumeData({...resumeData,public:!resumeData.public})
    
      
  } catch (error) {
    console.log(error.response?.data)
  }
}


const saveChanges=async()=>{

  try {
      
    let updatedResumeData= structuredClone(resumeData);
    if( typeof resumeData.personal_info.image==="object"){
      delete updatedResumeData.personal_info.image
    }

    const formdata=new FormData()
    formdata.append("resumeId",resumeid)
    formdata.append("resumeData",JSON.stringify(updatedResumeData))

    removeBackground && formdata.append("removeBackground","yes")
    typeof resumeData.personal_info.image==="object" && formdata.append("image",resumeData.personal_info.image)
    const {data}=await axios.put(`${API_URL}/api/resume/update`,formdata,{withCredentials:true})
    setResumeData(data.resume)
    console.log("saving project data:", resumeData.project)
    toast.success('succefull saved')
  } catch (error) {
    console.log(error)
  }
}

const handleShare=()=>{
  const frontendurl=window.location.href.split('/app/')[0]
  const resumeUrl=frontendurl+'/view/'+resumeid;


  if(navigator.share){
    navigator.share({url:resumeUrl,text:"My Resume"});
  }else{
    alert("share not support in this browser")
  }
}


const downloadResume=()=>{
  window.print()
}


 
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
                          activeSection.id==="project" && (
                            <Projects data={resumeData.project}  onChange={(data)=>setResumeData(prev=>({...prev,project:data}))} setResumeData={setResumeData} />
                          )
                        }




                        {
                          activeSection.id==="skills" && (
                            <Skills data={resumeData.skills}  onChange={(data)=>setResumeData(prev=>({...prev,skills:data}))} />
                          )
                        }



                        
                       </div>
                       <button  onClick={()=>saveChanges()} className='bg-gradient-to-br from-blue-100 to-blue-200 ring ring-blue-600 text-blue-600 hover:ring-blue-500 transition-all rounded-md px-6 py-2 mt-6 text-sm'>Save Changes</button>
                     </div>


                   </div>


                   {/*right*/}
                   <div className='lg:col-span-7 max-lg:mt-6'>
                       <div className='relative w-full'>
                        <div className='absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2'>
                          {
                            resumeData.public && (
                              <button onClick={handleShare} className='flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-lg ring-blue-300 hover:ring transition-colors'>
                                <Share2Icon/>
                              </button>
                            )
                          }
                          <button onClick={changeResumeVisiblity} className='flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 rounded-lg ring-purple-300 hover:ring transition-colors'>
                            {resumeData.public ?<EyeIcon className='size-4'/>:<EyeOffIcon className='size-4'/>}
                            {resumeData.public ?'Public':'Private'}
                          </button>

                          <button  onClick={downloadResume} className='flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-lg ring-green-300 hover:ring transition-colors'>
                            <DownloadIcon className='size-4'/>
                            Download
                          </button>
                        </div>
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
