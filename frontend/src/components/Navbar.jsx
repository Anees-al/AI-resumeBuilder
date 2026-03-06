import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store'

const Navbar = () => {
  const {user}=useAuthStore();
  console.log(user)
  return (
    <div className='bg-white shadow'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-5'>
          <Link  to='/' className='text-3xl font-semibold' >Resume <span className='text-indigo-500'>.</span></Link>


          <div className='flex gap-4'>
            <p className='text-xl font-semibold '>{user?.username}</p>
            <button className='px-5 py-1 bg-indigo-500 text-white rounded-lg shadow hover:shadow-xl'>Logout</button>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
