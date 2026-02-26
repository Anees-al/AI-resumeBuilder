import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white shadow'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-5'>
          <h1 className='text-3xl font-semibold'>Resume <span className='text-indigo-500'>.</span></h1>


          <div className='flex gap-4'>
            <p className='text-xl font-semibold '>Anees</p>
            <button className='px-5 py-1 bg-indigo-500 text-white rounded-lg shadow hover:shadow-xl'>Logout</button>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
