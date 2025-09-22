import "./ProfilePage.css"

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-card">
          <img src="/professional-woman-olivia.jpg" alt="Olivia Chen" className="profile-image" />
          <h1 className="profile-name">Olivia Chen</h1>
          <p className="profile-unit">Unit 305</p>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-details">
                <span className="contact-label">Email:</span>
                <span className="contact-value">olivia.chen@example.com</span>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-details">
                <span className="contact-label">Phone:</span>
                <span className="contact-value">(555) 123-4567</span>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">🚨</span>
              <div className="contact-details">
                <span className="contact-label">Emergency Contact:</span>
                <span className="contact-value">Daniel Chen ((555) 987-6543)</span>
              </div>
            </div>
          </div>

          <div className="additional-notes">
            <h3 className="notes-title">📝 Additional Notes:</h3>
            <p className="notes-text">
              Olivia is a software engineer and has been a resident of ResidentConnect since 2022. She is an active
              participant in community events and often organizes tech workshops for local youth, sharing her expertise
              and fostering a sense of community engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
