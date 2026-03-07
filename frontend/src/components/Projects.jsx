import { Briefcase, Plus, Trash } from 'lucide-react'
import React from 'react'

const Projects = ({data=[],onChange}) => {
    const addProject=()=>{
        const newProject = {
 name: "",
 project_type: "",
 description: ""
}


        onChange([...(data || []), newProject])
        console.log(newProject)
    }


    const removeProject=(index)=>{
            const update=data.filter((_,i)=>i!==index)
            onChange(update)
    }


     const updateProject=(index,field,value)=>{
            const update=[...data]
            update[index]={...update[index],[field]:value}
            onChange(update)
    }
  return (
   <div className='space-y-4'>
      <div className='flex items-center justify-between'>
           <div>
            <h1 className='flex items-center gap-2 text-lg font-semibold text-gray-500'>Projects</h1>
            <p className='text-sm text-gray-500'>Add your projects</p>
           </div>
           <button  type="button" onClick={addProject} className='flex items-center gap-2 px-3 py-2 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disable:opacity-50'>

            <Plus className='size-4'/>
            Add Projects
           </button>
      </div>


      {data.length===0 ? (
        <div className='text-center py-8 text-gray-500'>
            <Briefcase className='w-12 h-12 mb-3 text-gray-300 mx-auto '/>
            <p>No work experience added yet</p>
            <p className='text-sm'>Click add experience to get started</p>
        </div>
      ):
      
       ( <div className='space-y-4'>
             {data.map((project,index)=>(
                <div className='p-4 border border-gray-200 rounded-lg space-y-3' key={index}>
                      <div className='flex justify-between items-start'>
                          <h4>Project #{index +1}</h4>
                          <button  onClick={()=>removeProject(index)} className='text-red-500 hover:text-red-700 transition-colors'>
                            <Trash className='size-4'/>
                          </button>
                      </div>



                      <div className='grid  gap-3'>
                        <input type="text"  placeholder='Name Your Project' value={project.name || ""}  onChange={(e)=>updateProject(index,"name",e.target.value)}  className='px-3 py-2 text-sm rounded-lg '/>
                        
                                                   <textarea rows={6}   placeholder='Describe your project' value={project.description || ""}  onChange={(e)=>updateProject(index,"description",e.target.value)}  className='w-full px-3 py-2 text-sm rounded-lg resize-none '/>
                                              </div>


                      

                     
                </div>
             ))}  
        </div>
       )}
      
    </div>
  )
}

export default Projects
