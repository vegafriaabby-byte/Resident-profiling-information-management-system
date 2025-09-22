import "./ProfilePage.css"

const ProfilePage = ({ resident }) => {
  if (!resident) return <h2>No resident selected</h2>

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-card">
          <img
            src={resident.image || "/user.jpg"}
            alt={resident.name}
            className="profile-image"
          />
          <h1 className="profile-name">{resident.name}</h1>
          <p className="profile-unit">{resident.unit}</p>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span className="contact-value">{resident.email}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span className="contact-value">{resident.phone}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🚨</span>
              <span className="contact-value">{resident.emergency}</span>
            </div>
          </div>

          <div className="additional-notes">
            <h3>📝 Additional Notes:</h3>
            <p>{resident.notes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
