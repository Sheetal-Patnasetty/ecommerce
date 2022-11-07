import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='container'>
        <div className='wrapper'>
            <div className='left'>
                <div className='language'>
                    ENG
                </div>
                <div className='searchContainer'>
                    <input type="text" />
                    🔍 
                </div>
            </div>
            <div className='center'>
                <h1>bELLA.</h1>      {/* Bella -> beautiful women, Ella -> Goddess of beauty */}          
            </div>
            <div className='right'>
                <div className='menuItem'>
                    Register
                </div>
                <div className='menuItem'>
                    Sign In
                </div>
                <div className='badge'> 🛒 </div>
            </div>
        </div>
    </div>
  )
}
