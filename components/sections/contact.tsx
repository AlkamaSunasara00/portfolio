"use client"

import "./contact.css"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const contactLinks = [
  {
    name: "Email",
    value: "alkama.codespace@gmail.com",
    href: "mailto:sunasaraalkama0000@gmail.com",
    icon: <MdEmail />
  },
  {
    name: "LinkedIn",
    value: "alkama-sunasara-b682a3316",
    href: "https://www.linkedin.com/in/alkama-sunasara-b682a3316",
    icon: <FaLinkedin />
  },
  {
    name: "GitHub",
    value: "AlkamaSunasara00",
    href: "https://github.com/AlkamaSunasara00",
    icon: <FaGithubSquare />
  },
  {
    name: "Phone",
    value: "+91 99787 50622",
    href: "tel:+919978750622",
    icon: <FaSquarePhone />
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      {/* Endless Marquee Banner */}
      <div className="marquee">
        <div className="marquee-content">
          <span>GET IN TOUCH</span><span className="star">★</span>
          <span>LET'S CONNECT</span><span className="star">★</span>
          <span>GET IN TOUCH</span><span className="star">★</span>
          <span>LET'S CONNECT</span><span className="star">★</span>
        </div>
        <div className="marquee-content">
          <span>GET IN TOUCH</span><span className="star">★</span>
          <span>LET'S CONNECT</span><span className="star">★</span>
          <span>GET IN TOUCH</span><span className="star">★</span>
          <span>LET'S CONNECT</span><span className="star">★</span>
        </div>
      </div>

      <div className="container contact-container">
        <div className="contact-poster">
          {/* Decorative Corners */}
          <div className="corner corner-tl"></div>
          <div className="corner corner-br"></div>

          <div className="poster-header">
            <h3>Ready to build something?</h3>
            <p className="poster-desc">
              I’m passionate about building web applications and collaborating on exciting projects. Drop a message!
            </p>
            <div className="location-tag">
              <FaLocationDot /> Palanpur, Gujarat, India
            </div>
          </div>

          <div className="contact-links">
            {contactLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? '_self' : '_blank'} 
                rel="noopener noreferrer" 
                className="contact-block"
              >
                <div className="contact-block-left">
                  <span className="contact-icon">{link.icon}</span>
                  <span className="contact-name">{link.name}</span>
                </div>
                <div className="contact-block-right">
                  <span className="contact-value">{link.value}</span>
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
