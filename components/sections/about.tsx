"use client"

import "./about.css"
import ProfileCard from "../ui/ProfileCard"
import { FaEye, FaDownload, FaBolt, FaTerminal, FaRocket, FaLocationDot, FaGraduationCap } from "react-icons/fa6"

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        
        {/* Section Header */}
        <div className="about-header-wrap">
          <h2 className="section-title">About Me</h2>
        </div>

        {/* 2-Column Enhanced Layout */}
        <div className="about-content-grid">
          
          {/* Left Column: Interactive Profile Window + Quick Stats Matrix */}
          <div className="about-col-left">
            
            {/* Window Container */}
            <div className="profile-window-card">
              <div className="window-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="window-tag">DEV_ID // ALKAMA</span>
              </div>

              <div className="profile-card-body flex items-center justify-center p-4">
                <ProfileCard
                  name="Alkama Sunasara"
                  title="Software Engineer"
                  handle="@alkamasunasara"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/developer-headshot-bw.jpg"
                  showUserInfo={false}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => {
                    const el = document.getElementById('contact')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  behindGlowColor="rgba(255, 217, 61, 0.5)"
                  iconUrl="https://placehold.co/100x100/000/white?text=</>"
                  behindGlowEnabled={true}
                  innerGradient="linear-gradient(145deg, #FF6B6B 0%, #FFD93D 100%)"
                />
              </div>
            </div>

            {/* Quick Stat Stickers Grid */}
            <div className="quick-stats-grid">
              <div className="stat-sticker sticker-yellow">
                <FaLocationDot className="stat-icon" />
                <div>
                  <span className="stat-label">LOCATION</span>
                  <span className="stat-val">Palanpur, Gujarat</span>
                </div>
              </div>

              <div className="stat-sticker sticker-coral">
                <FaGraduationCap className="stat-icon" />
                <div>
                  <span className="stat-label">DEGREE</span>
                  <span className="stat-val">BSc-IT (2027)</span>
                </div>
              </div>

              <div className="stat-sticker sticker-cyan">
                <FaBolt className="stat-icon" />
                <div>
                  <span className="stat-label">STATUS</span>
                  <span className="stat-val">Open for Roles</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Bio Dossier + Core Focus Cards + Actions */}
          <div className="about-col-right">
            <div className="dossier-card">
              
              <div className="dossier-header">
                <span className="dossier-tag">
                  <FaTerminal className="size-3.5" /> DOSSIER // BIOGRAPHY
                </span>
                <span className="dossier-stamp-badge">VERIFIED DEV</span>
              </div>

              <div className="dossier-body">
                <h3 className="dossier-headline">
                  Building high-impact digital experiences with clean code & brutal design.
                </h3>

                <p className="dossier-para">
                  I’m a passionate Full Stack Developer specializing in modern web technologies. Based in Gujarat, India, I build scalable web applications with an emphasis on performance, responsive UI design, and robust architecture.
                </p>

                {/* 3 Core Highlight Cards */}
                <div className="focus-cards-grid">
                  <div className="focus-card card-frontend">
                    <FaBolt className="focus-icon text-[#FF6B6B]" />
                    <div>
                      <h4 className="focus-title">Frontend Mastery</h4>
                      <p className="focus-desc">Crafting reactive, pixel-perfect UIs with React, Next.js, & Tailwind CSS.</p>
                    </div>
                  </div>

                  <div className="focus-card card-backend">
                    <FaTerminal className="focus-icon text-[#FFD93D]" />
                    <div>
                      <h4 className="focus-title">Backend Systems</h4>
                      <p className="focus-desc">Designing robust REST APIs, Node.js microservices, & MySQL/MongoDB databases.</p>
                    </div>
                  </div>

                  <div className="focus-card card-speed">
                    <FaRocket className="focus-icon text-[#00F5D4]" />
                    <div>
                      <h4 className="focus-title">Product Mindset</h4>
                      <p className="focus-desc">Turning complex ideas into clean, user-focused digital products.</p>
                    </div>
                  </div>
                </div>

                {/* Resume Action Buttons */}
                <div className="resume-actions">
                  <a
                    href="/Alkama Resume.pdf"
                    className="btn-view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEye className="size-4" />
                    <span>View Resume</span>
                  </a>

                  <a href="/Alkama Resume.pdf" className="btn-save" download>
                    <FaDownload className="size-4" />
                    <span>Download Resume</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

