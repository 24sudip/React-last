
import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className='container'>
            <div className='navMain'>
                <div className='logo'>
                    <a href='#'>Gerícht</a>
                </div>
                <div className='navMenu'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Book Table</a></li>
                        <li><a href='#'>Testimony</a></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
