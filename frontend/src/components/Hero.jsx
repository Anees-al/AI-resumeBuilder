import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

   


  return (
     <>
            <div className="h-[80vh] pb-20">
                {/* Navbar */}
                <div className="w-full py-2.5 font-medium text-sm text-indigo-800 text-center bg-gradient-to-r from-indigo-100 to-indigo-300">
            <p><span className="px-3 py-1 rounded-lg text-white bg-indigo-500 mr-2">New</span >AI Feature Added</p>
        </div>
                <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
                    <h1 className='text-2xl font-semibold'>
                        Resume
                    </h1>

                    <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
                        <a href="#" className="hover:text-indigo-600 transition">Home</a>
                        <a href="#features" className="hover:text-indigo-600 transition">Features</a>
                        <a href="#testimonials" className="hover:text-indigo-600 transition">Testimonials</a>
                        <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
                    </div>

                    <div className="flex gap-2">
                        <Link to='/login?state=register' className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white">
                            Get started
                        </Link>
                        < Link to='/login?state=login' className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900" >
                            Login
                        </Link>
                    </div>

                    <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu" >
                            <path d="M4 5h16M4 12h16M4 19h16" />
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} >
                    <a href="/#" className="text-white">Home</a>
                    <a href="/#features" className="text-white">Products</a>
                    <a href="/#testimonial" className="text-white">Stories</a>
                    <a href="/#contact" className="text-white">contact</a>
                    <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md flex" >
                        X
                    </button>
                </div>

                {/* Hero Section */}
                <div className="relative flex flex-col items-center justify-center text-sm px-4   text-black">
                                        

                    {/* Headline + CTA */}
                    <h1 className="text-3xl md:text-6xl font-semibold max-w-5xl text-center mt-[100px] md:leading-[70px]">
                        Unlock your career potential with<span className=" bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent text-nowrap"> AI-powered</span> Resumes.
                    </h1>

                    <p className="max-w-md text-center text-base my-7 text-gray-600 font-semibold ">Create a future-ready resume powered by smart technology and real insights.</p>

                    {/* CTA Buttons */}
                    <div className="flex sm:flex-row flex-col items-center gap-4 ">
                        <Link  className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-indigo-400 flex items-center transition-colors ">
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 size-4 " aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                        <Link className="flex items-center gap-2 border border-slate-400 hover:bg-indigo-50 transition rounded-full px-7 h-12 text-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video size-5" aria-hidden="true"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>
                            <span>Try demo</span>
                        </Link>
                    </div>

                    

                    
                </div>
            </div>
           
        </>
  )
}

export default Hero
