import React from 'react'
import './css/achievements.css'

const Achievements = () => {
  const handlePreviewCertificate = () => {
    window.open('/certificates/fullstack-internshala.pdf', '_blank')
  }

  const handleDownloadCertificate = () => {
    const link = document.createElement('a')
    link.href = '/certificates/fullstack-internshala.pdf'
    link.download = 'Fullstack_Web_Development_Certificate.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="achievements-section">
      <h2 className="myski">Achievements</h2>
      <p className="achievements-subtitle">
        Here are some of my notable achievements:
      </p>

      <div className="achievements-container">
        {/* Achievement 1 */}
        <div className="achievement-item">
          <div className="achievement-content">
            <div className="achievement-icon">
              <i className="fas fa-code"></i>
            </div>

            <div className="achievement-details">
              <h3>Full Stack Web Development</h3>
              <p>
                Completed comprehensive full stack web development training from
                Internshala, covering modern technologies and best practices in
                web development.
              </p>

              <div className="certificate-actions">
                <button
                  className="download-btn"
                  onClick={handlePreviewCertificate}
                >
                  <i className="fas fa-eye"></i>
                  Preview Certificate
                </button>

                <button
                  className="download-btn"
                  onClick={handleDownloadCertificate}
                >
                  <i className="fas fa-download"></i>
                  Download Certificate
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="achievement-item">
          <div className="achievement-content">
            <div className="achievement-icon">
              <i className="fas fa-brain"></i>
            </div>

            <div className="achievement-details">
              <h3>DSA Problem Solving</h3>
              <p>
                Solved 200+ Data Structures and Algorithms problems on LeetCode,
                demonstrating strong problem-solving skills and algorithmic
                thinking.
              </p>

              <div className="leetcode-badge">
                <span className="leetcode-count">200+</span>
                <span className="leetcode-text">Problems Solved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
