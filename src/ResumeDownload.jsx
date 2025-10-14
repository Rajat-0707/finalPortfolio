import React from 'react'
import './resume.css'

const ResumeDownload = () => {
  const handleDownload = () => {
   
    alert('Resume download feature coming soon! Please contact Rajat directly for his resume.');
  };

  return (
    <div className="resume-download-container">
      <div className="resume-download-card">
        <div className="download-icon">
          📄
        </div>
        <h2>Download My Resume</h2>
        <p>Download my resume to learn more about my background, skills, and experience.</p>
        <button className="download-button" onClick={handleDownload}>
          Download Resume (PDF)
        </button>
      </div>
    </div>
  )
}

export default ResumeDownload
