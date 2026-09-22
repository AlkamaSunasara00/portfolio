"use client"

import { useState, useEffect } from "react"
import { FaBars, FaXmark, FaPaperPlane } from "react-icons/fa6"
import "./navbar.css"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ["hero", "about", "skills", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <header className={`navbar-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="nav-container">
          
          {/* Logo Badge */}
          <button onClick={() => scrollToSection("hero")} className="nav-logo-btn">
            <span className="logo-main">ALKAMA</span>
            <span className="logo-tag">.DEV</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop">
            {navLinks.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? "is-active" : ""}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="nav-right-actions">
            <button onClick={() => scrollToSection("contact")} className="nav-cta-btn">
              <FaPaperPlane className="size-3.5" />
              <span>LET'S TALK</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="nav-hamburger-btn"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <FaBars className="size-4" />
              <span>MENU</span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`sidebar-backdrop ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Brutalist Mobile Sidebar */}
      <aside className={`sidebar-drawer ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">NAVIGATION</span>
          <button className="sidebar-close-btn" onClick={() => setIsMenuOpen(false)}>
            <FaXmark className="size-5" />
          </button>
        </div>

        <div className="sidebar-links-wrap">
          {navLinks.map((item, index) => (
            <button
              key={item.id}
              className={`sidebar-link-btn ${activeSection === item.id ? "is-active" : ""}`}
              onClick={() => scrollToSection(item.id)}
            >
              <span className="sidebar-num">0{index + 1}</span>
              <span className="sidebar-label">{item.label}</span>
              <span className="sidebar-arrow">→</span>
            </button>
          ))}
        </div>

        <div className="sidebar-footer">
          <button onClick={() => scrollToSection("contact")} className="sidebar-cta-btn">
            <FaPaperPlane className="size-4" />
            <span>LET'S TALK</span>
          </button>
        </div>
      </aside>
    </>
  )
}
