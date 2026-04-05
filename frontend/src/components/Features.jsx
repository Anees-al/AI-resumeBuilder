import React from 'react'
import Title from './Title'
import { Camera } from 'lucide-react'
import {motion} from 'framer-motion'

const Features = () => {
  return (
    <>
   <div className='hidden sm:flex flex-col gap-4 items-center justify-center '>

  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-60 flex items-center justify-between w-full py-4 px-3 md:px-16 lg:px-24 xl:px-40">
             
                <motion.div className='flex flex-col gap-3 ' initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}}  transition={{duration:0.6}}>
                     <Camera  className='text-green-500' />

                     <motion.h1 className='text-2xl font-black max-w-[200px] playfair' initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}}  transition={{duration:0.6}}>Recruiter-Approved Resume</motion.h1>
                     <motion.p className='text-lg font-semibold text-gray-700 max-w-[220px] playfair' initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}}  transition={{duration:0.6}}>We work with recruiters to design resume templates that format automatically.</motion.p>

                </motion.div>
               <motion.div className='flex flex-col gap-3 ' initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}}  transition={{duration:0.6}}>
                     <Camera  className='text-green-500' />

                     <motion.h1 className='text-2xl font-black max-w-[200px] playfair' initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}}  transition={{duration:0.6}}>Different Templates</motion.h1>
                     <motion.p className='text-lg font-semibold text-gray-700 max-w-[220px] playfair' initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}}  transition={{duration:0.6}}>

Pick from multiple professional resume templates suited to various careers, ensuring a clean and tailored look.
</motion.p>

                </motion.div>
                <motion.div className='flex flex-col gap-3 ' initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}}  transition={{duration:0.6}}>
                     <Camera  className='text-green-500' />

                     <motion.h1 className='text-2xl font-black max-w-[200px] playfair' initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}}  transition={{duration:0.6}}>AI-Assisted Enhancement</motion.h1>
                     <motion.p className='text-lg font-semibold text-gray-700 max-w-[220px] playfair' initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}}  transition={{duration:0.6}}>Improve your resume instantly with smart AI suggestions that refine wording, highlight strengths, and boost overall impact.</motion.p>

                </motion.div>
                
            </div>
            </div>

    </>
  )
}

export default Features
