import React from 'react'

const Sessions = () => {
  return (
    <div>
      <div className='shadow-lg border border-grey-30 rounded-lg  max-w-[1100px] w-full mx-auto'>
                  <header className='p-4 border-b-grey-60 shadow-md'>
                      <h6 className='text-themecyan-darker text-[19px]'>My Sessions</h6>
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
  )
}

export default Sessions