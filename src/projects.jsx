import React from 'react'
import './css/projects.css'

const Projects = ({ title, description, liveUrl, githubUrl }) => {
  return (
    <div className="project-item">
      <div className="project-card">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">View Project →</a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  )
}

export default Projects