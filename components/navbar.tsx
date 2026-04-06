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
      setIsMenuOpen(false)
    }
  }

  const navLinks = ["About", "Skills", "Projects", "Experience", "Education", "Contact"]

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <button onClick={() => scrollToSection("hero")} className="nav-logo">
            ALKAMA.
          </button>

          {/* Desktop Nav */}
          <div className="nav-desktop">
            {navLinks.map((item) => (
              <button key={item} className="nav-link" onClick={() => scrollToSection(item.toLowerCase())}>
                {item}
              </button>
            ))}
          </div>

          <button onClick={() => scrollToSection("contact")} className="nav-cta">
            LET'S TALK
          </button>

          {/* Mobile Hamburger */}
          <button className="nav-hamburger" onClick={() => setIsMenuOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
               <line x1="3" y1="12" x2="21" y2="12"></line>
               <line x1="3" y1="6" x2="21" y2="6"></line>
               <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <span>MENU</span>
          </button>
        </div>
      </nav>

      {/* Overlay Backdrop */}
      <div 
        className={`sidebar-backdrop ${isMenuOpen ? "open" : ""}`} 
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Brutalist Sidebar */}
      <aside className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">NAVIGATION</span>
          <button className="sidebar-close" onClick={() => setIsMenuOpen(false)}>X</button>
        </div>
        <div className="sidebar-links">
          {navLinks.map((item, index) => (
            <button 
              key={item} 
              className="sidebar-link" 
              onClick={() => scrollToSection(item.toLowerCase())}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="sidebar-link-num">0{index + 1}</span>
              {item}
            </button>
          ))}
        </div>
        <div className="sidebar-footer">
          <button onClick={() => scrollToSection("contact")} className="sidebar-cta">
            GET IN TOUCH 
          </button>
        </div>
      </aside>
    </>
  )
}
