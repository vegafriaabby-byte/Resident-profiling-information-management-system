"use client"

import "./HomePage.css"


const HomePage = ({ setCurrentPage }) => {
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
              Resident Connect is your essential community directory for Poblacion 4,
              Hamtic, Antique. Easily access and manage resident profiles,
              find important local information, and stay connected with your neighbors.
              Strengthen your community by exploring profiles, keeping up-to-date, and
              engaging effortlessly with fellow residents.
            </p>
            <button
              className="explore-btn"
              onClick={() => setCurrentPage("residents")}
            >
              Explore Residents
            </button>
          </div>
          <div className="hero-image">
            <img
              src="/pob4.png"
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
