import React from 'react'
import './css/navbar.css' 
import {Link} from 'react-scroll' // Importing link from react-scroll for smooth scrolling
import Achievements from './achievements'

const Navbar = () => {
  return (
    <>

    {/* <div className="main"> */}
    <div className="container67"> 
      {/* <div className="blank">
      
      </div> */}
    <div className="nav">

      <div className="home"><Link    className='linn'    to='home'>Home</Link></div>
      <div className="skills"><Link    className='linn'    to='skills'>Skills</Link></div>
      <div className="projects"><Link    className='linn'    to='projects'>Projects</Link></div>
      <div className="achievements"><Link    className='linn'    to='achievements'>Achievements</Link></div>
      <div className="resume"><Link    className='linn'    to='resume'>Resume</Link></div>
      <div className="contact"><Link    className='linn'    to='contact'>Contact me</Link></div>

    </div>
    </div>
    
    
  {/* </div> */}
    </>
    
  )
}

export default Navbar
