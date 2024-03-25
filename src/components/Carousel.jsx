import React from 'react'

export default function Carousel() {
    const images = []
  return (
    <>
        <div className='flex flex-wrap'>
            <div className='relative w-1/2 p-2'>
                <img className='w-screen h-96 object-cover' src='../../public/car1.jpg' alt='' />
                <span className='absolute text-white text-2xl bottom-3 left-4 tracking-wide'>Banherin</span>
            </div>

            <div className='relative w-1/2 p-2'>
                <img className='w-screen h-96 object-cover' src='../../public/car2.avif' alt='' />
                <span className='absolute text-white text-2xl bottom-3 left-4 tracking-wide'>Banherin</span>
            </div>

            <div className='relative w-1/2 p-2'>
                <img className='w-screen h-96 object-cover' src='../../public/car3.jpg' alt='' />
                <span className='absolute text-white text-2xl bottom-3 left-4 tracking-wide'>Banherin</span>
            </div>

            <div className='relative w-1/2 p-2'>
                <img className='w-screen h-96 object-cover' src='../../public/car4.jpg' alt='' />
                <span className='absolute text-white text-2xl bottom-3 left-4 tracking-wide'>Banherin</span>
            </div>
            
            
            
            
        </div>
    </>
  )
}
