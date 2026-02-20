// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './css/App.css'
import ResumeDownload from './ResumeDownload'
import Navbar from './navbar'
import Home from './home'
import React from 'react'
import './css/navbar.css'
import './css/home.css'
import Skills from './skills'
import Hr from './Hr'
import './css/hr.css'
import './css/skill.css'
import Projects from './projects'
import Mainpage from './mainpage'
import './css/main2.css'
import WordDisplay from './worddisplay'
import Contact from './contact'
import './css/contact.css'
import Achievements from './achievements'
import './css/achievements.css'
import { Element } from 'react-scroll'

function App() {


  return (

    <>
      <div className="all">


        <Element name="home" >
          <Mainpage />
          <Hr />

          <Home />
        </Element>
        <Hr />
        <Element name="skills" >
          <div className="skillset"> <h1 className='myski'>My Skill Set</h1></div>

          <div className="skill">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skill-grid">
                <div className="skill-track">
                  <Skills name="HTML" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                  <Skills name="CSS" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                  <Skills name="JavaScript" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  <Skills name="React" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  <Skills name="Tailwind CSS" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
                  <Skills name="typeScript" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                  <Skills name="Bootstrap" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                  <Skills name="HTML" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                  <Skills name="CSS" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                  <Skills name="JavaScript" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  <Skills name="React" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  <Skills name="Tailwind CSS" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
                  <Skills name="typeScript" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                  <Skills name="Bootstrap" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                </div></div>
            </div>

            <div className="skill-category">
              <h3>Backend Development</h3>
              <div className="skill-grid">
                <div className="skill-track">
                  <Skills name="Node.js" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  <Skills name="Express.js" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                  <Skills name="MongoDB" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                  <Skills name="MySQL" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                  <Skills name="PHP" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                  <Skills name="Node.js" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  <Skills name="Express.js" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                  <Skills name="MongoDB" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                  <Skills name="MySQL" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                  <Skills name="PHP" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                </div></div>
            </div>

            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-grid">
                <div className="skill-track">
                  <Skills name="C" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                  <Skills name="C++" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                  <Skills name="Python" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                  <Skills name="Java" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                  <Skills name="javaScript" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  <Skills name="C" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                  <Skills name="C++" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                  <Skills name="Python" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                  <Skills name="Java" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                  <Skills name="javaScript" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                </div></div>
            </div>

            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <div className="skill-grid">
                <div className="skill-track">
                  <Skills name="Git" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                  <Skills name="GitHub" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                  <Skills name="VS Code" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                  <Skills name="Postman" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" />
                  <Skills name="Rest API" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/restapi/restapi-original.svg" />
                  <Skills name="Git" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                  <Skills name="GitHub" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                  <Skills name="VS Code" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                  <Skills name="Postman" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" />
                  <Skills name="Rest API" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/restapi/restapi-original.svg" />
                </div></div>
            </div>
          </div>
        </Element>

        <Element name="projects" >
          <Hr />
          <h1 className='myski'>Featured Projects</h1>

          <div className="projects-container">


            <div className="project-category">
              <h3 className="fullstack-heading">Full-Stack WebApplications</h3>
              <div className="projects-grid">
                <div className="project-item">
                  <div className="project-card">
                    <h4>Akrit - Artist Platform</h4>
                    <p>A platform connecting artists with clients for performance bookings. Provides artists with increased visibility and reach while offering clients an easy way to discover and book talented performers.</p>
                    <a href="https://akrit.vercel.app/" target="_blank" rel="noopener noreferrer">View Project →</a>
                    <a href="https://github.com/Rajat-0707/AKRIT" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                  </div>
                </div>
                <div className="project-item">
                  <div className="project-card">
                    <h4>PROJECT MANAGEMENT APP</h4>
                    <p>A full stack website to manage projects with drag and drop feature using react pangea dnd.Used express for backend and mongodb for database</p>
                    <a href="https://project-management-sigma-rosy.vercel.app/" target="_blank" rel="noopener noreferrer">View Project →</a>
                    <a href="https://github.com/Rajat-0707/ProjectManagement" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                  </div>
                </div>
                <div className="project-item">
                  <div className="project-card">
                    <h4>Movie Recommendation site</h4>
                    <p>A full-stack movie recommendation system that combines web development with data processing to suggest movies and TV shows based on user interests and content similarity.</p>
                    <a href="https://movie-recommendation-pi-ten.vercel.app/" target="_blank" rel="noopener noreferrer">View Project →</a>
                    <a href="https://github.com/Rajat-0707/movieRecommendation" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                  </div>
                </div>
                <div className="project-item">
                  <div className="project-card">
                    <h4>AI Website Generator</h4>
                    <p>An AI-powered website generator that creates complete websites from text prompts using React and AI APIs. Uses openrouter api and generates html/css/js output.</p>
                    <a href="https://ai-website-generator-liard.vercel.app/" target="_blank" rel="noopener noreferrer">View Project →</a>
                    <a href="https://github.com/Rajat-0707/aiWebsiteGenerator" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                  </div>
                </div>
                <div className="project-item">
                  <div className="project-card">
                    <h4>Task Manager</h4>
                    <p>A comprehensive task management application built with React, Redux, and CSS. Features local storage integration for persistent task management and intuitive user interface.</p>
                    <a href="https://takss-xhwf.vercel.app/" target="_blank" rel="noopener noreferrer">View Project →</a>
                    <a href="https://github.com/Rajat-0707/tas" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                  </div>
                </div>
                <div className="project-item">
                  <div className="project-card">
                    <h4>Digital Foorprint Time Capsule </h4>
                    <p> A full stack website made using MERN stack and typescript, where users can upload their messages and files to be unlocked after a certain time.</p>
                    <a href="https://digital-footprint-time-capsule.vercel.app/" target="_blank" rel="noopener noreferrer">View Project →</a>
                    <a href="https://github.com/Rajat-0707/digitalFootprintTimeCapsule" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                  </div>
                </div>
                <div className="project-item">
                  <div className="project-card">
                    <h4>Skill Swap</h4>
                    <p>skill-barter platform using the MERN stack and TypeScript, enabling users to offer and
                      request skills with secure JWT-based authentication and protected routes.
                      Real-time one-to-one messaging using Socket.io</p>
                    <a href="https://skill-swap-orpin-chi.vercel.app/" target="_blank" rel="noopener norefferer">View Project →</a>
                    <a href="https://github.com/Rajat-0707/skillSwap" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="project-category">
            <h3>React Applications</h3>
            <div className="projects-grid">
              <div className="project-item">
                <div className="project-card">
                  <h4>Odd Even Game</h4>
                  <p>A simple game built with React to guess if the sum of numbers guessed by both the player and computer is odd or even. </p>
                  <a href="https://evenoddgame.vercel.app/" target="_blank" rel="noopener noreferrer">View Project →</a>
                  <a href="https://github.com/Rajat-0707/evenoddgame" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </div>
              </div>
              <div className="project-item">
                <div className="project-card">
                  <h4>Portfolio Website</h4>
                  <p>A modern, responsive portfolio website showcasing projects, skills, and experience. Built with React and styled with glassmorphism design principles.</p>
                  <a href="https://final-portfolio-six-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">View Project →</a>
                  <a href="https://github.com/Rajat-0707/finalPortfolio" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </div>
              </div>
            </div>
          </div>
        </Element>

        <Hr />

        <Element name="achievements">
          <Achievements />
        </Element>
        <Hr />


        <Element name="resume" >
          <ResumeDownload />
        </Element>
        <Hr />

        <Element name="contact" >
          <Contact />
        </Element>

      </div>
    </>

  )
}

export default App
