import { FilePenIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets';
const Dashboard = () => {
  const [allresume,setAllresume]=useState([]);
  const colors=["#4F46E5", "#EC4899", "#14B8A6"]

  const loadResume=()=>{
    setAllresume(dummyResumeData)
  }

useEffect(()=>{
loadResume()
},[])




  return (
    <div className='flex flex-col px-10 py-5'>
      <h1 className='text-2xl font-semibold'>Welocome User</h1>


      <div className='flex sm:flex-row gap-3 items-center justify-center mt-10'>
             <button className='w-full bg-white sm:max-w-35 h-48 flex flex-col items-center justify-center border border-dashed border-gray-400 group rounded-lg gap-2 cursor-pointer hover:border-purple-500'>
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
    </div>
  )
}

export default Dashboard
