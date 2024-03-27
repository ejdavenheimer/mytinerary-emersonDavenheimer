import React from 'react'
import { Link } from 'react-router-dom'

function CitiesCard({citie}) {
    return (
        <>
            <Link to={"/cities/"+ citie.name} pool={citie} className='relative w-1/3'>
                <img className='min-h-[220px] object-cover border-4 rounded-xl shadow-md' src={citie.image} alt={"Photo of"+citie.name} />
                <div className='absolute text-white bottom-3 left-4 tracking-wide flex flex-col'>
                <span className='text-2xl'>{citie.name}</span>
                <span className='text-xl'>{citie.country}</span>
                </div>
            </Link>
        </>
    )
}

export default CitiesCard
