"use client"

import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1 className="hero-title">
              Connect with
              <br />
              Your
              <br />
              Community
            </h1>
            <p className="hero-description">
              ResidentConnect is your essential community directory, designed to help you easily find and connect with
              your neighbors, access important information, and foster a stronger, more vibrant community. Explore
              profiles, stay informed, and engage effortlessly.
            </p>
            <button className="explore-btn">Explore Residents</button>
          </div>
          <div className="hero-image">
            <img
              src="/community-people-gathering-in-park-with-trees.jpg"
              alt="Community gathering illustration"
              className="community-illustration"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
