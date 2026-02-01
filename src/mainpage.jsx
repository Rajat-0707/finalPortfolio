import React from 'react'
import './css/main2.css'
import WordDisplay from './worddisplay'
import './css/navbar.css'
import Navbar from './navbar'
const Mainpage = () => {
  return (
    <>
    
    <div className="cc">
     <video autoPlay loop muted src="bgvideo.mp4">
      </video>
      <Navbar />
    <div className="container12">

    <p className="text1">
       Hii, I am <span >Rajat</span> 
    </p>
    <div className="wd">
      <WordDisplay />
    </div>
    <p id='text2' >Welcome to my portfolio website</p>

    

    



    </div>
    </div>
    </>
   
  )
}

export default Mainpage