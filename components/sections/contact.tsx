"use client"

import { useState } from "react"
import "./contact.css"
import { MdEmail, MdContentCopy, MdCheck } from "react-icons/md"
import { FaLinkedin, FaSquareGithub, FaSquarePhone, FaLocationDot } from "react-icons/fa6"
import { FaPaperPlane } from "react-icons/fa"

const contactLinks = [
  {
    name: "Email",
    value: "alkama.codespace@gmail.com",
    href: "mailto:alkama.codespace@gmail.com",
    copyValue: "alkama.codespace@gmail.com",
    icon: <MdEmail />,
    accent: "#FF6B6B"
  },
  {
    name: "LinkedIn",
    value: "alkama-sunasara-b682a3316",
    href: "https://www.linkedin.com/in/alkama-sunasara-b682a3316",
    icon: <FaLinkedin />,
    accent: "#FFD93D"
  },
  {
    name: "GitHub",
    value: "AlkamaSunasara00",
    href: "https://github.com/AlkamaSunasara00",
    icon: <FaSquareGithub />,
    accent: "#00F5D4"
  },
  {
    name: "Phone",
    value: "+91 99787 50622",
    href: "tel:+919978750622",
    copyValue: "+919978750622",
    icon: <FaSquarePhone />,
    accent: "#A3E635"
  },
]

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const handleCopy = (text: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => {
      setCopiedText(null)
    }, 2500)
  }

  return (
    <section id="contact" className="contact section">
      
      {/* Toast Feedback Notification */}
      {copiedText && (
        <div className="neo-toast">
          <MdCheck className="size-5 text-[#00F5D4]" />
          <span>COPIED [{copiedText}] TO CLIPBOARD!</span>
        </div>
      )}

      {/* Endless Marquee Banner */}
      <div className="marquee">
        <div className="marquee-content">
          <span>GET IN TOUCH</span><span className="star">★</span>
          <span>LET'S CONNECT</span><span className="star">★</span>
          <span>BUILD HIGH-PERFORMANCE WEBSITES</span><span className="star">★</span>
          <span>AVAILABLE FOR ROLES</span><span className="star">★</span>
        </div>
        <div className="marquee-content">
          <span>GET IN TOUCH</span><span className="star">★</span>
          <span>LET'S CONNECT</span><span className="star">★</span>
          <span>BUILD HIGH-PERFORMANCE WEBSITES</span><span className="star">★</span>
          <span>AVAILABLE FOR ROLES</span><span className="star">★</span>
        </div>
      </div>

      {/* Brutalist Hazard Caution Strip */}
      <div className="hazard-tape"></div>

      {/* Giant Background Watermark Text */}
      <div className="bg-watermark">
        <span>LET'S TALK</span>
      </div>

      <div className="container contact-container">
        <div className="contact-poster">
          
          {/* Decorative Corner Stamps */}
          <div className="poster-stamp-tl">
            <span>READY TO WORK</span>
          </div>
          <div className="poster-stamp-tr">
            <span>2026 // OPEN</span>
          </div>

          <div className="poster-header">
            <div className="poster-header-top">
              <span className="poster-tag">
                <FaPaperPlane className="size-3.5" />
                <span>DIRECT COMMUNICATION</span>
              </span>
              <div className="location-tag">
                <FaLocationDot /> Palanpur, Gujarat, India
              </div>
            </div>

            <h3 className="poster-title">Ready to build something?</h3>
            <p className="poster-desc">
              I’m passionate about building full-stack web applications and collaborating on exciting projects. Drop a message or copy my details below!
            </p>
          </div>

          <div className="contact-links">
            {contactLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? '_self' : '_blank'} 
                rel="noopener noreferrer" 
                className={`contact-block block-variant-${idx + 1}`}
              >
                <div className="contact-block-left">
                  <span className="contact-icon">{link.icon}</span>
                  <span className="contact-name">{link.name}</span>
                </div>

                <div className="contact-block-right">
                  <span className="contact-value">{link.value}</span>
                  
                  {link.copyValue && (
                    <button 
                      onClick={(e) => handleCopy(link.copyValue!, e)}
                      className="btn-copy-mini"
                      title="Copy to Clipboard"
                    >
                      <MdContentCopy size={16} />
                      <span className="text-xs font-mono">COPY</span>
                    </button>
                  )}

                  <span className="contact-arrow">→</span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
