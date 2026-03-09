import React from 'react'

const Fotter = () => {
  return (
    <footer className="w-full bg-[#7978FA] text-gray-800 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-16 flex sm:flex-row items-center justify-between gap-10">
                <div className="flex items-center space-x-3 mb-6">
                    <h1 className='text-3xl font-bold text-white'>Create AI assisted resumes</h1>
                </div>


                <div className='hidden sm:flex flex-col text-sm  text-white mt-20 gap-3'>
                    <p className='cursor-pointer'>About</p>
                    <p className='cursor-pointer'>Templates</p>
                    <p className='cursor-pointer'>Resume</p>
                </div>


                <p className='hidden sm:flex text-white max-w-[400px] ml-10 text-semibold'>This resume was created with the assistance of AI tools and reviewed for accuracy by the candidate.</p>
                
            </div>
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal text-white font-semibold">
                 ©2025. All rights reserved.
                </div>
            </div>
        </footer>
  )
}

export default Fotter
