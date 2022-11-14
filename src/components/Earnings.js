import React from 'react'

const Earnings = () => {
  return (
    <div>
       <div className='shadow-lg border border-grey-30 rounded-lg  max-w-[800px] w-full mx-auto'>
                  <header className='p-4 border-b-grey-60 shadow-md'>
                      <h6 className='text-themecyan-darker text-[19px]'>My Earnings</h6>
                  </header>
                  <div className='p-6 w-full'>
                       <div className="flex justify-center gap-6 mt-4">
                        <div className="flex flex-col items-center w-full gap-4 max-w-[400px]">
                              <h6>Previous Week</h6>
                              <span className='font-bold text-[20px]'>$ 0.00</span>
                          </div>
                        <div className="flex flex-col items-center w-full gap-4 max-w-[400px]">
                              <h6>This Week</h6>
                              <span className='font-bold text-[20px]'>$ 0.00</span>
                        </div>
                       </div>
                    <div className="flex flex-col gap-4 items-center mt-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas.</p>
                     <a href="#support" className='text-blue-dark'>support@live.com</a>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas</p>
            
                     </div>
                  </div>
                  
      </div>
      <button className="btn mx-auto my-5">Add Direct Deposit Info</button>
      <p className='mx-auto block text-center'>
        <a className='mr-2 text-blue-dark font-bold' href="http://wwww.facebook.com" target="_blank" rel="noopener noreferrer">
        Click here
        </a>
        to complete and sign your notary
      </p>
     
    </div>
  )
}

export default Earnings