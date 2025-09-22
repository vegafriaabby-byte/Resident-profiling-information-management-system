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
              Our mission is to create a vibrant and connected residential community. We strive to provide a
              centralized, reliable, and user-friendly platform where residents can easily connect with neighbors,
              access important community information, and engage in local activities. By facilitating seamless
              communication and information sharing, we aim to enhance the quality of life for everyone in our
              community.
            </p>
            <p>
              We are committed to maintaining privacy and security, ensuring that all resident data is handled with the
              utmost care and respect. ResidentConnect is built on the principles of transparency, accessibility, and
              community engagement.
            </p>
          </div>
        </section>

        <section className="values-section">
          <div className="values-grid">
            <div className="value-item">
              <h3>Connection</h3>
              <p>Fostering strong bonds and meaningful interactions among all residents.</p>
            </div>
            <div className="value-item">
              <h3>Transparency</h3>
              <p>Providing clear and accessible information to keep everyone informed.</p>
            </div>
            <div className="value-item">
              <h3>Support</h3>
              <p>Creating a supportive environment where neighbors can help each other.</p>
            </div>
          </div>
        </section>

        <section className="story-section">
          <h2 className="story-title">The ResidentConnect Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                ResidentConnect began with a simple idea: to make community living easier and more enjoyable. Frustrated
                by fragmented communication channels and difficulty finding local information, a small group of
                residents envisioned a unified platform. From that vision, ResidentConnect was born.
              </p>
              <p>
                Since its inception, we've grown into a comprehensive directory, continually evolving based on feedback
                from our valued residents. We are proud to serve as a vital link, fostering a sense of belonging and
                facilitating a truly connected community experience.
              </p>
            </div>
            <div className="story-images">
              <img src="/modern-kitchen-cooking.png" alt="Community kitchen" className="story-image" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage
