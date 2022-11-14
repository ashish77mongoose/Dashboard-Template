import React from 'react'
import { FiAward } from 'react-icons/fi'
import { BiDollarCircle } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import { MdComputer ,MdThumbUp } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
const DashboardLanding = () => {
  return (
      <div>
          <div className='upper flex flex-col gap-4'>
              <h6 className='flex items-center gap-2'>Dashboard  <FiAward className='text-[22px] text-themecyan-darker' /> </h6>
              <div className='flex justify-between'>
                  <button className='btn-outline w-fit'>View Public Profile</button>
                  <button className='btn h-[48px] w-fit'>Start Notarizing</button>
              
              </div>
             
              <NavLink to='#' className='text-[14px] font-medium text-themecyan-darker underline'>Show F&F Discount Code</NavLink>
          </div>
          <div className="stats grid grid-cols-4 gap-8 mt-10">
              <div className='p-4  shadow-lg border-2 border-grey-30 border-l-[6px] border-l-blue-dark rounded-lg flex items-center justify-between'>
                  <div className='space-y-1'>
                      <h6 className='text-themecyan-text2 mb-2 text-[16px]'>Earnings</h6>
                      <div className="flex gap-2"><span className='font-bold min-w-[80px] '>Previous</span> <span className='font-bold'>$0.00</span> </div>
                      <div className="flex gap-2"><span className='font-bold min-w-[80px] '>Current</span> <span className='font-bold'>$8.00</span> </div>
                  </div>
                  <div>
                      <BiDollarCircle className='text-[32px]'/>
                  </div>
              </div>
              <div className='p-4  shadow-lg border-2 border-grey-30 border-l-[6px] border-l-themecyan-darker rounded-lg flex items-center justify-between gap-2'>
                  <div className='space-y-1 flex-1'>
                      <h6 className='text-themecyan-text2 mb-2 text-[16px]'>Review Score</h6>
                      <div className="flex "><span className='font-bold'>No Reviews Yet</span>  </div>
                     
                  </div>
                  <div>
                      <AiFillStar className='text-[32px]'/>
                  </div>
              </div>
              <div className='p-4  shadow-lg border-2 border-grey-30 border-l-[6px] border-l-yellow-dark rounded-lg flex items-center justify-between gap-2'>
                  <div className='space-y-1 flex-1'>
                      <h6 className='text-themecyan-text2 mb-2 text-[16px]'>Average Sessions Per Day</h6>
                      <div className="flex "><span className='font-bold'>2</span>  </div>
                     
                  </div>
                  <div>
                      <MdComputer className='text-[32px]'/>
                  </div>
              </div>
              <div className='p-4  shadow-lg border-2 border-grey-30 border-l-[6px] border-l-green-dark rounded-lg flex items-center justify-between gap-2'>
                  <div className='space-y-1 flex-1'>
                      <h6 className='text-themecyan-text2 mb-2 text-[16px]'>Credentials Status</h6>
                      <div className="flex "><span className='font-bold'>Current</span> </div>
                    
                  </div>
                  <div>
                      <MdThumbUp className='text-[32px]'/>
                  </div>
              </div>
              
          </div>

          {/* tables */}
          <div className="grid grid-cols-2 gap-8 mt-10">
              <div className='shadow-lg border border-grey-30 rounded-lg w-full'>
                  <header className='p-4 border-b-grey-60 shadow-md'>
                      <h6 className='text-themecyan-darker text-[16px]'>Notary Leaderboard</h6>
                  </header>
                  <div className='p-4 w-full'>
                     <table class="border-collapse border-2 border-grey-30 w-full border-spacing-2">
                        <thead>
                            <tr>
                            <th class="border-2 border-grey-30 py-3 ">SR.NO</th>
                            <th class="border-2 border-grey-30 py-3 ">Notary</th>
                            <th class="border-2 border-grey-30 py-3 ">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                              {Array(7).fill('1').map(() => (
                                <tr>
                            <td class="border-2 border-grey-30 py-3 text-center ">1</td>
                            <td class="border-2 border-grey-30 py-3 text-center ">Bejamin Franklin</td>
                            <td class="border-2 border-grey-30 py-3 text-center ">102</td>
                            </tr>
                           ))}
                           
                        </tbody>
                        </table>
                  </div>
                  
              </div>
               <div className='shadow-lg border border-grey-30 rounded-lg w-full'>
                  <header className='p-4 border-b-grey-60 shadow-md'>
                      <h6 className='text-themecyan-darker text-[16px]'>Recent Sessions</h6>
                  </header>
                  <div className='p-4 w-full'>
                     <table class="border-collapse border-2 border-grey-30 w-full border-spacing-2">
                        <thead>
                            <tr>
                            <th class="border-2 border-grey-30 py-3 ">Time</th>
                            <th class="border-2 border-grey-30 py-3 ">Customer</th>
                            <th class="border-2 border-grey-30 py-3 ">Customer Email</th>
                            </tr>
                        </thead>
                        <tbody>
                              {Array(7).fill('1').map(() => (
                                <tr>
                            <td class="border-2 border-grey-30 py-3 text-center ">Sept 28, 2022</td>
                            <td class="border-2 border-grey-30 py-3 text-center ">Bejamin Franklin</td>
                            <td class="border-2 border-grey-30 py-3 text-center ">Bejamin@gmail.com</td>
                            </tr>
                           ))}
                           
                        </tbody>
                        </table>
                  </div>
                  
              </div>
              
          </div>
    </div>
  )
}

export default DashboardLanding