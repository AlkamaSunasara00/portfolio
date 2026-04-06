"use client"

import "./footer.css"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2 className="footer-huge-logo">ALKAMA.<br/>STUDIO</h2>
          <p className="footer-bio">
            Full Stack Developer specializing in React.js, Node.js, and scalable brutalist web solutions.
            Building things that don't just work, but scream for attention.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-link-group">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links-list">
              {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-link-group">
            <h4 className="footer-title">Socials</h4>
            <ul className="footer-links-list">
              <li>
                <a href="mailto:alkama.codespace@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alkama-sunasara-b682a3316" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/AlkamaSunasara00" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Alkama Sunasara. All rights reserved.</p>
        <button onClick={scrollToTop} className="footer-back-to-top">
          ↑ Back To Top
        </button>
      </div>
    </footer>
  )
}
