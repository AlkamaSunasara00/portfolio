"use client"

import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <h3 className="logo">Alkama Sunasara</h3>
          <p>Full Stack Developer specializing in React.js, Node.js, and scalable web solutions.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:alkama.codespace@gmail.com">alkama.codespace@gmail.com</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alkama-sunasara-b682a3316"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/alkama-sunasara" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="tel:+919978750622">+91 99787 50622</a>
            </li>
            <li>Palanpur, Gujarat, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Alkama Sunasara. All rights reserved.</p>
      </div>
    </footer>
  )
}
