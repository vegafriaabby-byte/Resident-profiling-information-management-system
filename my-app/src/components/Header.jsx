"use client"

import "./Header.css"

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-text">logo</span>
        </div>
        <nav className="nav">
          <button
            className={currentPage === "home" ? "nav-link active" : "nav-link"}
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>
          <button
            className={currentPage === "residents" ? "nav-link active" : "nav-link"}
            onClick={() => setCurrentPage("residents")}
          >
            Residents
          </button>
          <button
            className={currentPage === "about" ? "nav-link active" : "nav-link"}
            onClick={() => setCurrentPage("about")}
          >
            About
          </button>
          <button
            className={currentPage === "contact" ? "nav-link active" : "nav-link"}
            onClick={() => setCurrentPage("contact")}
          >
            Contact
          </button>
        </nav>
        <button className="login-btn" onClick={() => setCurrentPage("login")}>
          <span className="login-icon"></span>
          👤Login
        </button>
      </div>
    </header>
  )
}

export default Header
