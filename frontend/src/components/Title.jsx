import React from 'react'

const Title = ({title,descripction}) => {
  return (
    <div className='flex flex-col gap-4 p-4'>
        <h1 className='text-3xl font-semibold text-center'>{title}</h1>
        <p className='text-center text-xs text-gray-600 font-semibold w-auto mb-10'>{descripction}</p>
    </div>
  )
}

export default Title
