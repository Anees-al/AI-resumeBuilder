import { GraduationCap, Plus, Trash } from 'lucide-react'
import React from 'react'

const Education = ({data,onChange}) => {


    const addEducation=()=>{
        const newEducation={
            institution:"",
            degree:"",
            field:"",
            graduation_date:"",
            gpa:"",
            
        }


        onChange([...data,newEducation])
    }


    const removeEducation=(index)=>{
            const update=data.filter((_,i)=>i!==index)
            onChange(update)
    }


     const updateEducation=(index,field,value)=>{
            const update=[...data]
            update[index]={...update[index],[field]:value}
            onChange(update)
    }
  return (
   <div className='space-y-4'>
      <div className='flex items-center justify-between'>
           <div>
            <h1 className='flex items-center gap-2 text-lg font-semibold text-gray-500'>Education</h1>
            <p className='text-sm text-gray-500'>Add your education details</p>
           </div>
           <button onClick={addEducation} className='flex items-center gap-2 px-3 py-2 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disable:opacity-50'>

            <Plus className='size-4'/>
            Add education
           </button>
      </div>
      {data.length===0 ? (
        <div className='text-center py-8 text-gray-500'>
            <GraduationCap className='w-12 h-12 mb-3 text-gray-300 mx-auto '/>
            <p>No education added yet</p>
            <p className='text-sm'>Click add education</p>
        </div>
      ): (
        <div className='space-y-4'>
             {data.map((education,index)=>(
                <div className='p-4 border- border-gray-200 rounded-lg space-y-3'>
                      <div className='flex justify-between items-start'>
                          <h4>Education #{index +1}</h4>
                          <button  onClick={()=>removeEducation(index)} className='text-red-500 hover:text-red-700 transition-colors'>
                            <Trash className='size-4'/>
                          </button>
                      </div>



                      <div className='grid md:grid-cols-2 gap-3'>
                        <input type="text"  placeholder='Insitute name' value={education.institution || ""}  onChange={(e)=>updateEducation(index,"institution",e.target.value)}  className='px-3 py-2 text-sm rounded-lg '/>
                        <input type="text"  placeholder='Degree' value={education.degree || ""}  onChange={(e)=>updateEducation(index,"degree",e.target.value)}  className='px-3 py-2 text-sm rounded-lg '/>
                       <input type="text" placeholder='field of study'  value={education.field || ""}  onChange={(e)=>updateEducation(index,"field",e.target.value)}  className='px-3 py-2 text-sm rounded-lg '/>
                       <input type="month"  value={education.graduation_date || ""}  onChange={(e)=>updateEducation(index,"graduation_date",e.target.value)}   className='px-3 py-2 text-sm rounded-lg '/>
                      </div>


                      <input type="text"  value={education.gpa || ""}  onChange={(e)=>updateEducation(index,"gpa",e.target.value)}   className='px-3 py-2 text-sm rounded-lg ' placeholder='enter your gpa'/>


                     
                </div>
             ))}  
        </div>
      )}
    </div>
  )
}

export default Education
