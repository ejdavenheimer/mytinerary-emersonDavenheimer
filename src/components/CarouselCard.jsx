import React from 'react'

function CarouselCard({ citie }) {

    return (
        <>
            <article className='relative w-1/4'>
                <img className=' h-96 object-cover border-4 rounded-xl shadow-md' src={citie.image} alt='' />
                <div className='absolute text-white bottom-3 left-4 tracking-wide flex flex-col'>
                <span className='text-2xl'>{citie.name}</span>
                <span className='text-xl'>{citie.country}</span>
                </div>
            </article>
        </>
    )
}

export default CarouselCard
