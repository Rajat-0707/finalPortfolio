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
import Contact from './contact'
import './css/contact.css'
import Achievements from './achievements'
import './css/achievements.css'
import { Element } from 'react-scroll'
import { skillCategories, projectCategories } from './data'

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
            {skillCategories.map((category, catIndex) => (
              <div className="skill-category" key={catIndex}>
                <h3>{category.title}</h3>
                <div className="skill-grid">
                  <div className="skill-track">
                    {/* Render skills twice for seamless marquee loop */}
                    {[...category.skills, ...category.skills].map((skill, i) => (
                      <Skills key={`${catIndex}-${i}`} name={skill.name} image={skill.image} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Element>

        <Element name="projects" >
          <Hr />
          <h1 className='myski'>Featured Projects</h1>

          <div className="projects-container">
            {projectCategories.map((category, catIndex) => (
              <div className="project-category" key={catIndex}>
                <h3 className={category.headingClass || ''}>{category.title}</h3>
                <div className="projects-grid">
                  {category.projects.map((project, projIndex) => (
                    <Projects
                      key={`${catIndex}-${projIndex}`}
                      title={project.title}
                      description={project.description}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                    />
                  ))}
                </div>
              </div>
            ))}
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
