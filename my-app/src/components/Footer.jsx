import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#" className="footer-link">
            Navigate
          </a>
          <a href="#" className="footer-link">
            Legal
          </a>
          <a href="#" className="footer-link">
            Community
          </a>
        </div>

        <div className="footer-social">
          <a href="#" className="social-link">
            📘
          </a>
          <a href="#" className="social-link">
            🐦
          </a>
          <a href="#" className="social-link">
            💼
          </a>
        </div>
      </div>

      <div className="footer-bottom">
      </div>
    </footer>
  )
}

export default Footer
