import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div>
        <div className='bg-hero-pattern bg-no-repeat bg-cover'>
            <div className="h-[100vh] backdrop-brightness-50 text-white backdrop-blur-sm from-sky-500 to-indigo-500 flex justify-center items-center flex-col">
                <h2 className='text-5xl font-bold mb-6'>MyItinerary</h2>
                <p className='text-center text-xl'>Find your perfect trip, designed by insiders who know and love their citiest.</p>
               
                <Link to="/cities" className='mt-10 text-xl border-2 p-2'>
                Click here to see Cities
                </Link>
            </div>
        </div>
        
    </div>
  )
}
