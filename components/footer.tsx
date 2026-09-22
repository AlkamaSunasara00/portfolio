"use client"

import "./footer.css"
import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socials = [
    {
      name: "Email",
      handle: "alkama.codespace@gmail.com",
      url: "mailto:alkama.codespace@gmail.com",
      icon: <MdEmail className="size-5" />,
      accent: "#FF6B6B"
    },
    {
      name: "LinkedIn",
      handle: "alkama-sunasara",
      url: "https://www.linkedin.com/in/alkama-sunasara-b682a3316",
      icon: <FaLinkedin className="size-5" />,
      accent: "#FFD93D"
    },
    {
      name: "GitHub",
      handle: "AlkamaSunasara00",
      url: "https://github.com/AlkamaSunasara00",
      icon: <FaSquareGithub className="size-5" />,
      accent: "#00F5D4"
    },
  ]

  const navItems = ["About", "Skills", "Projects", "Education", "Contact"]

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2 className="footer-huge-logo">ALKAMA.<br />DEV</h2>
          <p className="footer-bio">
            Full Stack Developer specializing in React.js, Node.js, and scalable brutalist web solutions.
            Building things that don't just work, but scream for attention.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-link-group">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-nav-grid">
              {navItems.map((item, idx) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="footer-nav-btn">
                    <span className="nav-num">0{idx + 1}</span>
                    <span className="nav-text">{item}</span>
                    <FaArrowRight className="nav-icon-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-link-group">
            <h4 className="footer-title">Socials</h4>
            <ul className="footer-socials-grid">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target={social.url.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    style={{ "--social-accent": social.accent } as React.CSSProperties}
                  >
                    <div className="social-btn-left">
                      <span className="social-btn-icon-box">{social.icon}</span>
                      <div className="social-btn-meta">
                        <span className="social-btn-name">{social.name}</span>
                        <span className="social-btn-handle">{social.handle}</span>
                      </div>
                    </div>
                    <span className="social-btn-arrow">↗</span>
                  </a>
                </li>
              ))}
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
