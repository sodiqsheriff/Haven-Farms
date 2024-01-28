import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <form action=""  className='flex justify-center pt-5 items-center'>
          <div className="bg-white shadow-2xl h-[550px] w-[700px] py-5 rounded-xl">
              <h2 className="text-4xl text-center text-blue-950 font-bold font-Albert">
                IFAKO JAIYE LGA
              </h2>
              <h3 className="text-sm text-center pt-2 font-semibold">Sign up into your account.</h3>
             <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-7  px-5 pt-10 ">
               <input type="text" placeholder='First Name' className='bg-gray-200 ps-5 py-3 rounded-lg border-none outline-none shadow-inner' />
               <input type="text" placeholder='Last Name' className='bg-gray-200 ps-5 py-3 rounded-lg border-none outline-none shadow-inner' />
               <input type="Email" placeholder='Email' className='bg-gray-200 ps-5 py-3 rounded-lg border-none outline-none shadow-inner' />
               <input type="number" placeholder='+234-' className='bg-gray-200 ps-5 py-3 rounded-lg border-none outline-none shadow-inner' />
               <input type="password" placeholder='Password' className='bg-gray-200 ps-5 py-3 rounded-lg border-none outline-none shadow-inner' />
               <input type="Password" placeholder='Confirm Password' className='bg-gray-200 ps-5 py-3 rounded-lg border-none outline-none shadow-inner' />
               <input type="text" placeholder='Company Name' className='bg-gray-200 ps-5 py-3 rounded-lg border-none outline-none shadow-inner' />
             </div>
             <div className="px-5 space-y-3 pt-5">
             <NavLink className='text-blue-950 underline pt-5 font-semibold' to=''>Already have an account?</NavLink>
             <NavLink className='flex w-full justify-center rounded-lg  py-3 bg-blue-950 text-white' to='/'>SignUp</NavLink>
             </div>
          </div>
      </form>
    </>
  )
}

export default Signup