import React from 'react'

const EditSignature = () => {
  return (
      <div>
            <div className='shadow-lg border border-grey-30 rounded-lg  max-w-[1100px] w-full mx-auto'>
                  <header className='p-4 border-b-grey-60 shadow-md'>
                      <h6 className='text-themecyan-darker text-[19px]'>Edit Notary Signature</h6>
                  </header>
              <div className='p-4 w-full min-h-[400px]'>
                  <div className="flex justify-between gap-2 items-center">
                      <button className='text-themecyan-darker font-bold'>View Example Document</button>
                      <button className='btn-outline border-red-dark text-red-dark hover:text-white hover:bg-red-dark'>Delete</button>
                  </div>

                  {/* Signature will be here */}

                  <div>
                      
                  </div>
                    
                  </div>
                  
              </div>
    </div>
  )
}

export default EditSignature