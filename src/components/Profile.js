import React from 'react'
import {CgAwards} from 'react-icons/cg'
import { AiFillFacebook, AiFillLinkedin, AiFillStar, AiFillTwitterSquare } from 'react-icons/ai'
import {FiLink} from 'react-icons/fi'
const Profile = () => {
  return (
    <div className='mt-10 flex justify-center items-center'>
      <div className="shadow-lg relative shadow-themecyan-lighter2 bg-white p-14 flex flex-col items-center rounded-3xl max-w-[650px] w-full">
        
        <div className=' relative w-[150px] h-[150px] rounded-full'>
          <img className=' rounded-full w-full h-full object-cover drop-shadow-lg  shadow-[0_2px_8px_grey]' src="/images/profile.jpg" alt="" />
          <CgAwards className='absolute bottom-0 right-0  text-[45px] text-themecyan-darker bg-white w-10 h-10 center p-[6px] rounded-full shadow-[0_2px_8px_grey]'/>
        </div>
        <div className='mt-10 flex flex-col gap-2 items-center'>
          <h5>Emma Watson</h5>
          <div className='flex gap-2 justify-center items-center'>
            <AiFillStar className='text-[24px] text-red-light' /> <span className='font-semibold text-[18px]'>No Reviews Yet</span>
           
          </div>
          <button className='text-blue-dark font-bold mt-2 block mx-auto underline'>Edit profile</button>
          
          <div className="about mt-10 flex flex-col gap-1 items-center">
            <h6>About Emma</h6>
            <p className='para text-center'>Hello, I am Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quas eveniet animi cum, accusantium porro itaque reprehenderit expedita cumque, harum est deleniti suscipit minima excepturi hic obcaecati, sapiente nam quos!</p>
            <span className='text-themecyan-text2 mt-2'>Joined May 2022</span>
            <span className='font-bold mt-4'>Want to notarize with Emma?</span>
            <button className='btn rounded-md px-10 mt-2 '>Get Started</button>
            <h6 className='text-themecyan-text2 mt-4'>Share Profile Link</h6>
            <div className="flex justify-center items-center gap-2 mt-2">
              <span className='w-12 h-12 cursor-pointer hover:bg-themecyan-tertiary duration-300 group bg-themecyan-lighter2 mycenter rounded-full'><AiFillFacebook className='text-[22px] text-black '/></span>
              <span className='w-12 h-12 cursor-pointer hover:bg-themecyan-tertiary duration-300 group bg-themecyan-lighter2 mycenter rounded-full'><AiFillLinkedin className='text-[22px] text-black '/></span>
              <span className='w-12 h-12 cursor-pointer hover:bg-themecyan-tertiary duration-300 group bg-themecyan-lighter2 mycenter rounded-full'><AiFillTwitterSquare  className='text-[22px] text-black '/></span>
              <span className='w-12 h-12 cursor-pointer hover:bg-themecyan-tertiary duration-300 group bg-themecyan-lighter2 mycenter rounded-full'><FiLink className='text-[22px] text-black '/></span>
             
            </div>


          </div>
          
       </div>
           

             
              

          </div>
      
    </div>
  )
}

export default Profile