import React, { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi';
import {  useNavigate } from 'react-router-dom'
import { sidemenu } from '../utils/constants'

const Sidebar = () => {
  const nav = useNavigate();
  const [profileMenu, setProfileMenu] = useState(false);
  const handlePath = (index) => {
    if (index === 0) {
      setProfileMenu(!profileMenu);
    }
    if (index === 1) {
     nav('/dashboard/sessions')
    }
    if (index === 2) {
     nav('/dashboard/earnings')
    }
    if (index === 3) {
     nav('/')
    }
    
  }
  const handleProfile = (index) => {
     if (index === 0) {
       nav('/dashboard/profile')
       
    }
    if (index === 1) {
     nav('/dashboard/credentials')
    }
    if (index === 2) {
     nav('/dashboard/schedule')
    }
  }

  return (
    <div className='h-screen bg-white shadow-lg shadow-themecyan-lighter  overflow-auto w-full py-8  xxl:px-8 px-6 '>

      <h4 className='cursor-pointer' onClick={()=>nav('/dashboard/landing')} >Notarize HQ</h4>

      <div className='flex flex-col gap-2 mt-8 xxl:mt-12'>
        {sidemenu.map((item, index) => (
          <div className='w-full flex flex-col'>
             <div onClick={()=>handlePath(index)} key={index} className=' relative font-semibold text-grey-90 py-4 w-full px-4 rounded-xl flex gap-4 items-center cursor-pointer'>
              <span className=''>{item.icon}</span> <span className='text-[18px] xxl:text-[22px]'> {item.title} </span> {index===0 &&<FiChevronRight  className={`ml-auto text-[22px] ${profileMenu ? `rotate-[90deg]`:``}`}/>}
              
              
            </div>
            {profileMenu && index===0 ?
                 <ul className={`w-full shadow-sm  rounded-md p-2 transition-all duration-1000 `}>
                {
                  item.profilemenu?.map((link, index) => (
                    <li onClick={() => {
                      handleProfile(index);
                       setProfileMenu(!profileMenu);
                    }} className='text-[18px] xxl:text-[22px] relative font-semibold text-grey-90 py-3 xxl:py-3 w-full px-4 rounded-xl flex gap-4 items-center cursor-pointer'>{link}</li>
                  ))
               }
                 

              </ul>:null
           }
          </div>
         
        )
          
        )}
      </div>
    </div>
  )
}

export default Sidebar