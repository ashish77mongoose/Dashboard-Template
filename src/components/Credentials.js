import React from 'react'
import { credentials } from '../utils/constants'
import { useNavigate } from 'react-router-dom';

const Credentials = () => {
  const nav = useNavigate();
  const handleNav = (index) => {
    if (index === 0) {
      nav('/dashboard/edit-signature')
    }
    
  }
  return (
    <div className=' flex justify-center items-center mt-10'>
      <div className="flex flex-wrap justify-center   max-w-[900px] xxl:max-w-[1000px] mx-auto gap-8">
        {credentials.map((item, index) => (
          <div onClick={()=>handleNav(index)} className="flex bg-white  flex-col rounded-lg  w-full max-w-[400px] xxl:max-w-[480px] gap-4 cursor-pointer items-center col-span-1  shadow-lg p-6">
          <img className='w-[80px]' src={item.logo} alt="" />
            <h6>{ item.title}</h6>
        </div>
        ))}

      </div>

    </div>
  )
}

export default Credentials