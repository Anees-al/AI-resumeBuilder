import { FilePenIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const [allresume,setAllresume]=useState([]);
  const [showCreateResume,setShowCreateResume]=useState(false);
  const [showUploadResume,setShowUploadResume]=useState(false)
  const[title,setTile]=useState('');
  const[resume,setResume]=useState(null);
  const[resumeId,setResumeId]=useState(null)
  const colors=["#4F46E5", "#EC4899", "#14B8A6"]

  const loadResume=()=>{
    setAllresume(dummyResumeData)
  }

  const navigate =useNavigate()

useEffect(()=>{
loadResume()
},[])


const createResume=(e)=>{
  e.preventDefault();
  setShowCreateResume(false);
  navigate('/app/builder/res123')
}



  return (
    <div className='flex flex-col px-10 py-5'>
      <h1 className='text-2xl font-semibold'>Welocome User</h1>


      <div className='flex sm:flex-row gap-3 items-center justify-center mt-10'>
             <button className='w-full bg-white sm:max-w-35 h-48 flex flex-col items-center justify-center border border-dashed border-gray-400 group rounded-lg gap-2 cursor-pointer hover:border-purple-500' onClick={()=>setShowCreateResume(true)}>
                <PlusIcon  className='size-11 transition-all duration-300 p-2.5 text-white bg-gradient-to-br from-indigo-300 to-indigo-500 rounded'/>
                <p className='text-sm'>Create Resume</p>
             </button>



             <button className='w-full bg-white sm:max-w-35 h-48 flex flex-col items-center justify-center border border-dashed border-gray-400 group rounded-lg gap-2 cursor-pointer hover:border-purple-500'>
                <UploadCloudIcon  className='size-11 transition-all duration-300 p-2.5 text-white bg-gradient-to-br from-purple-300 to-purple-500 rounded shadow-'/>
                <p className='text-sm'>Upload Existing</p>
             </button>
      </div>


      <hr className='border-b border-gray-200 mt-10' />



      <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
  {allresume.map((item,index)=>{
    const baseColor=colors[index % colors.length]


    return(
      <button className='relative w-full sm:max-w-36 h-46 flex flex-col items-center justify-center rounded-lg gap-2 border border-gray-200 group hover:shadow-lg transition-all duration-300 cursor-pointer mt-10'  style={{background:`linear-gradient(135deg,${baseColor}10,${baseColor}50)`}}>
               <FilePenIcon className='size-7 group-hover:scale-105 transition-all'  style={{color:baseColor}}/>
               <p className='text-sm group-hover:scale-105 transition-all text-center px-2'  style={{color:baseColor}}>{item.title}</p>
               <p className='absolute bottom-1 text-[11px] text-slate-500 group-hover:text-slate-600 transition-all duration-300 text-center px-2'>Updated on{new Date(item.updatedAt).toLocaleDateString()}</p>


               <div className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                <TrashIcon  className='size-7 p-2 hover:bg-white/50 rounded text-slate-700 transition-colors'/>
                <PencilIcon  className='size-7 p-2 hover:bg-white/50 rounded text-slate-700 transition-colors'/>
               </div>
      </button>
    )
  })}
      </div>


      {
        showCreateResume && (
          <form onSubmit={createResume} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center '  onClick={()=>setShowCreateResume(false)}>
            <div className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-[350px] p-6 '  onClick={e=>e.stopPropagation()}>
              <h1 className='text-xl font-semibold mb-4 text-center'>Create Resume</h1>
              <input type="text"  placeholder='enter the title of the resume' required className='w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600 ' />
              <button className='w-full bg-green-600 text-white rounded hover:bg-green-700 transition-colors py-1.5'>Create Resume</button>
              <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors'   onClick={()=>{setShowCreateResume(false);  setTile('')}}/>
            </div>
          </form>
        )
      }
    </div>
  )
}

export default Dashboard
