import React from 'react'
import '../header/Header.css'

function Header(props) {
  return (
    <div>
        <nav className='nav navbar header text-center w-100 bg-dark'>
           
            <h2>{props.heading}</h2>
        </nav>
    </div>
  )
}

export default Header