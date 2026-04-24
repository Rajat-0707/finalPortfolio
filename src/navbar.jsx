import React, { useState } from 'react'
import './css/navbar.css' 
import {Link} from 'react-scroll' // Importing link from react-scroll for smooth scrolling
import Achievements from './achievements'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container67">
        <div className="nav">
          <div className="hamburger" onClick={toggleMenu}>
            {!isOpen ? (
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            ) : (
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            )}
          </div>
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <div className="home"><Link className='linn' to='home' onClick={toggleMenu}>Home</Link></div>
            <div className="skills"><Link className='linn' to='skills' onClick={toggleMenu}>Skills</Link></div>
            <div className="projects"><Link className='linn' to='projects' onClick={toggleMenu}>Projects</Link></div>
            <div className="achievements"><Link className='linn' to='achievements' onClick={toggleMenu}>Achievements</Link></div>
            <div className="resume"><Link className='linn' to='resume' onClick={toggleMenu}>Resume</Link></div>
            <div className="contact"><Link className='linn' to='contact' onClick={toggleMenu}>Contact me</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
