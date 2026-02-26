import React from 'react'

const Fotter = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-indigo-200 to-[#FFFFFF] text-gray-800 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <h1 className='text-3xl font-semibold'>Resume</h1>
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Create a future-ready resume powered by smart technology and real insights.
                </p>
            </div>
            <div className="border-t border-slate-400">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                 ©2025. All rights reserved.
                </div>
            </div>
        </footer>
  )
}

export default Fotter
