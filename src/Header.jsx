import React, { useState } from 'react'
import './App.css'
import Menu from './Menu'


function Header() {

    const [isOpen, setOpen] = useState(false);

    function changeOpen(){
        setOpen(!isOpen)
    }
    
  return (
    <div>
      <header>
        <div className='flex justify-between p-4 bg-emerald-700'>
            <nav onClick={changeOpen} >
                { isOpen ? null : <i class="fa-solid fa-bars"></i> }
            </nav>
            <div>
                <img src='' alt='' />
                <h1>MyItinerary</h1>
            </div>
            <span className='menu'><i class="fa-solid fa-user"></i></span>
        </div>
        
      </header>
      { isOpen ? <Menu ></Menu> : null }
    </div>
  )
}

export default Header
