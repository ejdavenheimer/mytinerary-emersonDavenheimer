import React from 'react'

export default function MenuLateral() {
  return (
    <>
        <nav className='w-screen bg-DarkCyan py-4 flex flex-col h-screen text-lg text-white'>
            <span className='p-3 text-xl font-bold  border-solid border-b-2 border-DarkBlue'>X</span>
            <a className='py-3 px-5   border-solid border-b-2 border-DarkBlue' href='#'>Home</a>
            <a className='py-3 px-5 border-solid border-b-2 border-DarkBlue' href='#'>Cities</a>
        </nav>
    </>
  )
}
