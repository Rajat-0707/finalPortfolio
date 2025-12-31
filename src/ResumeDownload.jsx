import React from 'react'
import './resume.css'

const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/certificates/resume.pdf'
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

const handlePreview=()=>{
  window.open('/certificates/resume.pdf', '_blank')
}

  return (
    <div className="resume-download-container">
      <div className="resume-download-card">
        <div className="download-icon">
          📄
        </div>
        <h2>Download My Resume</h2>
        <p>Download my resume to learn more about my background, skills, and experience.</p>
        <button className="download-button" onClick={handlePreview}>
          Preview Resume (PDF )
        </button>
        <button className="download-button" onClick={handleDownload}>
          Download Resume (PDF)
        </button>
      </div>
    </div>
  )
}

export default ResumeDownload
