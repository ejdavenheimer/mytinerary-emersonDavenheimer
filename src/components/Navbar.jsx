import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <div className='relative flex justify-between bg-StrongCyan py-4 px-8 banner text-lg'>
                <nav className='flex gap-3'>
                    <Link to="/">Home</Link>
                    <Link to="/Cities">Cities</Link>
                </nav>
                <div className='absolute left-[45%] font-bold text-xl'>
                    <h1>MyItinerary</h1>
                </div>
                <div>
                <Link to="/register"  className='text-white'><span className='menu'><i className="fa-solid fa-user"></i>Register</span></Link>
                <Link to="/login"><span className='menu'><i className="fa-solid fa-user"></i>Login</span></Link>
                </div>
                
                
            </div>
            
        </>
    )
}

export default Navbar
