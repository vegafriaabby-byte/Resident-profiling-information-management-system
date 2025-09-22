"use client"

import "./AboutPage.css"

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <section className="mission-section">
          <h1 className="mission-title">Our Mission</h1>
          <div className="mission-text">
            <p>
              Our mission is to help the residents of <strong>Poblacion 4, Hamtic, Antique</strong> stay connected. Resident Connect is a simple and easy-to-use platform where neighbors can find each other, share information, and take part in community activities. We want to make it easier for everyone to communicate and stay informed.
            </p>
            <p>
              We take privacy and security seriously. All resident information is handled carefully and respectfully. Resident Connect is built to be clear, accessible, and helpful for the Poblacion 4 community.
            </p>
          </div>
        </section>

        <section className="values-section">
          <div className="values-grid">
            <div className="value-item">
              <h3>Connection</h3>
              <p>Helping neighbors meet and interact with each other.</p>
            </div>
            <div className="value-item">
              <h3>Transparency</h3>
              <p>Sharing clear and easy-to-find information with everyone.</p>
            </div>
            <div className="value-item">
              <h3>Support</h3>
              <p>Creating a friendly environment where neighbors can help each other.</p>
            </div>
          </div>
        </section>

        <section className="story-section">
          <h2 className="story-title">The Resident Connect Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Resident Connect began with a simple idea: to make life in <strong>Poblacion 4, Hamtic, Antique</strong> easier. Residents wanted a place where everyone could find neighbors, local information, and community activities in one spot. From that idea, Resident Connect was created.
              </p>
              <p>
                Over time, it has grown into a complete community directory. We continue to improve it based on feedback from residents. Our goal is to help people feel included, stay informed, and enjoy living in Poblacion 4.
              </p>
            </div>
            <div className="story-images">
              <img src="/resident.png" alt="Community kitchen" className="story-image" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage
