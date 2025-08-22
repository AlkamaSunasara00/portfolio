"use client"

import { useState, useEffect } from "react"
import "./navbar.css"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false) // close menu on click
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-content">
          <button onClick={() => scrollToSection("hero")} className="logo highlight">
            Alkama Sunasara
          </button>

          {/* Hamburger (Mobile) */}
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Links */}
          <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
            {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
              <li key={item}>
                <button onClick={() => scrollToSection(item.toLowerCase())}>
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button onClick={() => scrollToSection("contact")} className="btn-primary">
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  )
}
