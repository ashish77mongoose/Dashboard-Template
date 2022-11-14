import React, { useState } from 'react'
import {AiFillEye ,AiFillEyeInvisible} from  'react-icons/ai'
const Login = () => {
    const [eye, setEye] = useState(false)
  return (
      <div className=' min-h-screen w-full flex justify-center items-center'>
          
          <div className="shadow-lg shadow-themecyan-lighter2 bg-white p-14 flex flex-col items-center rounded-3xl max-w-[550px] w-full">
              <h2 className='text-themecyan-darker text-center'>Welcome Back</h2>
              <span className='text-[18px] mt-2 font-medium text-themecyan-text '>Sign Into Account</span>

              <form className='w-full flex flex-col gap-6 mt-4'>
                  
                  <div className="input_field">
                      <input type="text"  placeholder='Email Address'/>
                  </div>
                   <div className="input_field relative">
                      <input type={eye ?"text":"password"} placeholder='Password' />

                      <span className='absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer z-10' onClick={()=>setEye(!eye)}>
                          
                          {
                              eye ? <AiFillEye className='text-2xl text-themecyan-text' />:   <AiFillEyeInvisible className='text-2xl text-themecyan-text' />
                          }
                      </span>
                     
                      
                  </div>
                  <button className='btn w-full max-w-[100%] uppercase font-bold text-[18px] '> Login</button>
              </form>
              

          </div>
    </div>
  )
}

export default Login