"use client"

import { useState } from "react"
import "./ContactPage.css"

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    email: "",
    message: "",
  })

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-form-wrapper">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">We'd love to hear from you! Please fill out the form below.</p>

          <form className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={contactForm.firstName}
                onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Write your message here..."
                rows="5"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
