import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className='flex min-h-screen w-full'>
      <div className="flex w-[280px] xxl:w-[350px]  h-full sticky top-0 ">
        <Sidebar/>

      </div>
      <div className="flex-1 pb-6">
        <nav className=' bg-white text-grey-90 w-full py-6 xxl:py-8 sticky top-0 z-50 shadow-sm px-8'>
          <h4>Hi, Emma</h4>
        </nav>
        <div className='px-6 w-full mt-10'>
           <Outlet/>
        </div>
       
        
      </div>
    </div>
  )
}

export default Dashboard