import React from 'react'
import ring3 from '../images/ring3.png';

const experience = () => {
  return (
    <div className='md:w-[75%] lg:w-[70%] justify-center align-middle items-center mx-auto mb-10'>
        
        <div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 my-2 mb-7  text-center justify-items-center align-middle items-center'>
                   <div>
                      <p className='font-bold text-3xl'>HTML</p>
                      <p className='text-[12px]'>1 Year Experience</p>
                   </div>

                   <div className='mt-5'>
                      <p className='font-bold text-3xl text-center'>CSS</p>
                      <p className='text-[12px]'>1 Year Experience</p>
                   </div>

                   <div className='mt-5'>
                      <p className='font-bold text-3xl'>JavaScript</p>
                      <p className='text-[12px]'>1 year Experience</p>
                   </div>

                   <div className='mt-5'>
                      <p className='font-bold text-3xl'>Tailwind</p>
                      <p className='text-[12px]'>1 Year Experience</p>
                   </div>

                   <div className='mt-5'>
                      <p className='font-bold text-3xl'>React</p>
                      <p className='text-[12px]'>1 Year Experience</p>
                   </div>

                   <div className='mt-5'>
                      <p className='font-bold text-3xl'>Git</p>
                      <p className='text-[12px]'>1 Year Experience</p>
                   </div>
                   <img src={ring3} alt="" className='absolute bottom-0 right-0'/>
                </div>
                <hr/>
            
    </div>
  )
}

export default experience