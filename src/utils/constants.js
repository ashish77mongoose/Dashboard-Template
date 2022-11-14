import { FaUser } from 'react-icons/fa'
import { BiLogOutCircle ,BiDollarCircle } from 'react-icons/bi'
import {AiOutlineUnorderedList} from 'react-icons/ai'


export const sidemenu = [
    { path:'/dashboard/profile',title:'Profile' ,icon:<FaUser className='text-[22px] xxl:text-[28px]'/> ,profilemenu:['My Profile' , 'Credentials' ,'Schedules']},
    { path:'/dashboard/sessions',title:'Sessions',icon:<AiOutlineUnorderedList className='text-[22px] xxl:text-[28px]'/>},
    { path:'/dashboard/earnings',title:'Earnings',icon:<BiDollarCircle className='text-[22px] xxl:text-[28px]'/>},
    { path:'',title:'Logout',icon:<BiLogOutCircle className='text-[22px] xxl:text-[28px]'/>},
   
]
export const credentials = [
    {logo:'/images/autograph.png' ,title:'Signature'},
    {logo:'/images/gps.png' ,title:'Address'},
    { logo: '/images/stamp.png', title: 'Commission and Seals' },
    {logo:'/images/approved.png' ,title:'Digital Certifcate'},
    {logo:'/images/achievements.png' ,title:'Certifications and Achievements'},
    
]


