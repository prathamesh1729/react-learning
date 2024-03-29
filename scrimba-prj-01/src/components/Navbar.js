import React from 'react'
import rxIconSmall from '../images/react-icon-small.png'

export default function Navbar() {
    return (
        <nav className='NavBar'>
            <img src={rxIconSmall} alt="React Logo" className='nav--icon'/>
            <h3 className='nav--logo_text'>ReactFacts</h3>
            <h4 className='nav--title'>React Course - Project 1</h4>
        </nav>
    )
}
