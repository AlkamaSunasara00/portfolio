"use client"

import { ReactTyped } from "react-typed"
import { IoRocketSharp } from "react-icons/io5"
import { MdEmail, MdFolderOpen } from "react-icons/md"
import { FaCode, FaTerminal, FaCheck } from "react-icons/fa"
import React from "react"
import "./hero.css"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="w-full relative">
      
      {/* Background Graphic Watermark */}
      <div className="hero-bg-watermark">
        <span>FULL-STACK</span>
      </div>

      {/* Floating Animated Graphic Star */}
      <div className="hero-floating-star">
        <span>★</span>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className="hero-grid">
          
          {/* Left Column: Headline, Subtitle, CTAs & Stats */}
          <div className="hero-left">


            {/* Oversized Headline Group */}
            <div className="flex flex-col items-start mt-2">
              <div className="hero-role-sticker">
                <span className="flex items-center gap-2">
                  <FaCode className="text-black size-4" /> Full Stack Developer
                </span>
              </div>

              <h1 className="hero-title">
                <span className="hero-title-alkama">Alkama</span>
                <span className="hero-title-sunasara">Sunasara</span>
              </h1>
            </div>

            {/* Subtitle Card with ReactTyped */}
            <div className="hero-subtitle-box">
              <p className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                Crafting high-impact web applications with
              </p>
              <div className="hero-typed-wrap">
                <ReactTyped
                  strings={[
                    "clean scalable code.",
                    "high-performance APIs.",
                    "modern React & Next.js.",
                    "robust database systems."
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  backDelay={1500}
                  loop
                />
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="hero-cta-group">
              <button 
                onClick={() => scrollToSection("projects")} 
                className="btn-primary hero-btn"
              >
                <IoRocketSharp className="size-5" />
                <span>View Work</span>
              </button>

              <button 
                onClick={() => scrollToSection("contact")} 
                className="btn-secondary hero-btn"
              >
                <MdEmail className="size-5" />
                <span>Contact Me</span>
              </button>

              <a 
                href="/Alkama Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary hero-btn bg-white"
              >
                <MdFolderOpen className="size-5" />
                <span>Resume</span>
              </a>
            </div>

            {/* Metric Stat Cards */}
            <div className="hero-stats-row">
              <div className="hero-stat-card card-coral">
                <div className="hero-stat-num">07+ Mos</div>
                <div className="hero-stat-label">MERN Stack Exp</div>
              </div>

              <div className="hero-stat-card card-yellow">
                <div className="hero-stat-num">03+ Apps</div>
                <div className="hero-stat-label">Production Works</div>
              </div>

              <div className="hero-stat-card card-lime">
                <div className="hero-stat-num">100%</div>
                <div className="hero-stat-label">Code Quality</div>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Interactive Code Terminal Window */}
          <div className="hero-right">
            <div className="hero-terminal-card">
              
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="terminal-tag">
                  <FaTerminal className="size-3" /> alkama.config.ts
                </span>
              </div>

              <div className="terminal-body">
                <div className="terminal-status-row">
                  <span className="status-indicator"></span>
                  <span className="status-text font-mono">STATUS // ONLINE & READY</span>
                </div>

                <div className="terminal-code-box">
                  <span className="code-line text-[#FF6B6B]">const developer = &#123;</span>
                  <span className="code-line pl-4 text-black font-semibold">name: <span className="text-[#000] bg-[#FFD93D] px-1 font-mono">"Alkama Sunasara"</span>,</span>
                  <span className="code-line pl-4 text-black font-semibold">role: <span className="text-[#000] bg-[#A3E635] px-1 font-mono">"Full Stack Engineer"</span>,</span>
                  <span className="code-line pl-4 text-black font-semibold">location: <span className="text-black font-mono">"Gujarat, India"</span>,</span>
                  <span className="code-line pl-4 text-black font-semibold">stack: [<span className="text-[#FF6B6B] font-mono">"React"</span>, <span className="text-[#FFD93D] font-mono">"Next.js"</span>, <span className="text-[#A3E635] font-mono">"Node"</span>]</span>
                  <span className="code-line text-[#FF6B6B]">&#125;;</span>
                </div>

                {/* Tech Stack Pills Badge Row */}
                <div className="terminal-stack-pills">
                  <span className="stack-pill pill-react">React.js</span>
                  <span className="stack-pill pill-next">Next.js</span>
                  <span className="stack-pill pill-node">Node.js</span>
                  <span className="stack-pill pill-ts">TypeScript</span>
                  <span className="stack-pill pill-db">MySQL</span>
                </div>

                <div className="terminal-footer-bar">
                  <FaCheck className="text-[#A3E635] size-4" />
                  <span className="font-mono text-xs font-bold text-white">200 OK // READY TO BUILD</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}



