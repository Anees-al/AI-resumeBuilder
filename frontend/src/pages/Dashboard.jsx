import { PlusIcon, UploadCloudIcon } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
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
    </div>
  )
}

export default Dashboard
