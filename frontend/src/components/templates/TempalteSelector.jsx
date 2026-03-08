import { Check, Layout } from 'lucide-react';
import React, { useState } from 'react'

const TempalteSelector = ({selectedTemplate,onChange}) => {
    const [isopen,setIsopen]=useState(false);

    const templates=[
        {id:"classic",name:'Classic',preview:"A clean traditional resume format with clear section and professional typography" },
         {id:"modern",name:'Modern',preview:"sleek design with statrgic use of colors and modern fonts" },
          {id:"minimal-image",name:'Minimal Image',preview:"Minimal design with single image and clean typography" },
           {id:"minimal",name:'Minimal',preview:"ultra clean design that put you content front and center" },
           { id: "modern-sidebar", name: "Modern Sidebar", preview: "A modern two-column resume layout with a colored sidebar highlighting contact info, skills, and education."},
           { id: "professional-split", name: "Professional Split", preview: "Balanced two-column professional layout separating skills and summary from work experience."}
    ]
  return (
    <div className='relative'>
          <button  onClick={()=>setIsopen(!isopen)} className='flex items-center gap-1 text-sm text-blue-500 bg-gradient-tobr from-blue-500 to-blue-100 ring-blue-500 hover:ring transition-all px-3 py-3 rounded-lg'>
            <Layout size={14}/><span className='max-sm:hidden'>Template</span>
          </button>

          {
            isopen && (
                <div className='absolute top-full w-xs p-3 mt-2 space-y-3 z-10 bg-white rounded-md border border-gray-200 shadow-sm'>
                {
                    templates.map((items)=>(
                        <div key={items.id}  onClick={()=>{onChange(items.id);  setIsopen(false)}} className={`relative p-3 border rounded-md cursor-pointer transition-all ${selectedTemplate===items.id ? "border-blue-500 bg-blue-200":"border-gray-300 hover:border-gray-400 hover:bg-gray-300"}`}>
                 {selectedTemplate===items.id && (
                    <div className='absolute top-2 right-2'>
                         <div className='size-5 bg-blue-500 rounded-full flex items-center justify-center'>
                            <Check className='w-3 h-3 text-white'/>
                         </div>
                    </div>
                 )}


                 <div className='space-y-1'>
                    <h1>{items.name}</h1>
                    <div className='mt-2 p-2 bg-white rounded text-xs text-gray-500 italic'>{items.preview}</div>
                 </div>
                        </div>
                    ))
                }
                </div>
            )
          }
    </div>
  )
}

export default TempalteSelector
