import { Briefcase, Plus, Sparkle, Trash } from 'lucide-react'
import React from 'react'

const Experience = ({data,onChange}) => {


    const addExperience=()=>{
        const newExperience={
            company:"",
            position:"",
            start_date:"",
            end_date:"",
            description:"",
            is_current:false
        }


        onChange([...data,newExperience])
    }


    const removeExperience=(index)=>{
            const update=data.filter((_,i)=>i!==index)
            onChange(update)
    }


     const updateExperience=(index,field,value)=>{
            const update=[...data]
            update[index]={...update[index],[field]:value}
            onChange(update)
    }
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
           <div>
            <h1 className='flex items-center gap-2 text-lg font-semibold text-gray-500'>Professional Expirience</h1>
            <p className='text-sm text-gray-500'>Add your job experience</p>
           </div>
           <button onClick={addExperience} className='flex items-center gap-2 px-3 py-2 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disable:opacity-50'>

            <Plus className='size-4'/>
            Add experience
           </button>
      </div>
      {data.length===0 ? (
        <div className='text-center py-8 text-gray-500'>
            <Briefcase className='w-12 h-12 mb-3 text-gray-300 mx-auto '/>
            <p>No work experience added yet</p>
            <p className='text-sm'>Click add experience to get started</p>
        </div>
      ): (
        <div className='space-y-4'>
             {data.map((experience,index)=>(
                <div className='p-4 border- border-gray-200 rounded-lg space-y-3'>
                      <div className='flex justify-between items-start'>
                          <h4>Experience #{index +1}</h4>
                          <button  onClick={()=>removeExperience(index)} className='text-red-500 hover:text-red-700 transition-colors'>
                            <Trash className='size-4'/>
                          </button>
                      </div>



                      <div className='grid md:grid-cols-2 gap-3'>
                        <input type="text"  placeholder='Company name' value={experience.company || ""}  onChange={(e)=>updateExperience(index,"company",e.target.value)}  className='px-3 py-2 text-sm rounded-lg '/>
                        <input type="text"  placeholder='Job Title' value={experience.position || ""}  onChange={(e)=>updateExperience(index,"position",e.target.value)}  className='px-3 py-2 text-sm rounded-lg '/>
                       <input type="month"  value={experience.start_date || ""}  onChange={(e)=>updateExperience(index,"start_date",e.target.value)}  className='px-3 py-2 text-sm rounded-lg '/>
                       <input type="month"  value={experience.end_date || ""}  onChange={(e)=>updateExperience(index,"end_date",e.target.value)} disabled={experience.is_current}  className='px-3 py-2 text-sm rounded-lg disable:bg-gray-100'/>
                      </div>


                      <label className='flex items-center gap-3'>
                        <input type="checkbox" checked={experience.is_current || false}   onChange={(e)=>{updateExperience(index,"is_current",e.target.checked?true:false)}}  className='rounded border-gray-33 text-blue-600 focus:ring-blue-300'/>
                        <span className='text-sm text-gray-300'>Currently working her</span>
                      </label>



                      <div className='space-y-3'>
                        <div className='flex items-center justify-between'>
                            <label htmlFor="" className='text-sm font-medium text-gray-500'>Job description</label>
                        <button className='flex items-center gap-2 px-3 py-2 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disable:opacity-50'>
                            <Sparkle className='w-3 h-3'/>
                            Enhance with AI
                        </button>
                        </div>

                        <textarea  rows={6}  value={experience.description || ""}  onChange={(e)=>updateExperience(index,"description",e.target.value)} className='w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none'   placeholder='describe your experience and achievments'/>
                      </div>
                </div>
             ))}  
        </div>
      )}
    </div>
  )
}

export default Experience
