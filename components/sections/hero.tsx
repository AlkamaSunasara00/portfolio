// "use client"

// import "./hero.css"

// export default function Hero() {
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId)
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" })
  //   }
  // }

//   return (
//     <section id="hero" className="hero">
//       <div className="container">
//         <div className="hero-content">
//           <h1 className="hero-title">
//             Hi, I'm <span className="highlight">Alkama Sunasara</span>
//           </h1>
//           <h2 className="hero-subtitle">Full Stack Developer</h2>
//           <p className="hero-tagline">
//             Crafting digital experiences with clean code and modern technologies. Passionate about building scalable web
//             applications that make a difference.
//           </p>
//           <div className="hero-buttons">
//             <button onClick={() => scrollToSection("projects")} className="btn-primary">
//               View My Work
//             </button>
//             <button onClick={() => scrollToSection("contact")} className="btn-secondary">
//               Contact Me
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




"use client"

import { ReactTyped } from "react-typed"
import { IoRocketSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import React, { useState, useRef, useEffect } from "react"

import "./hero.css"

export default function Hero() {
  const [videoEnded, setVideoEnded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5 // Set playback speed here (e.g., 1.5x)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleVideoEnded = () => {
    setVideoEnded(true)
  }

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        {/* Left Side - Text */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Alkama Sunasara</span>
          </h1>
          <h2 className="hero-subtitle">
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "UI/UX Developer",
                "Frontend Developer",
                "Backend Developer",
                "MERN Stack Developer",
              ]}
              typeSpeed={60}
              backSpeed={10}
              backDelay={1200}
              loop
            />
          </h2>
          <p className="hero-tagline">
            Crafting digital experiences with <span className="highlight">clean code</span> and{" "}
            <span className="highlight">modern technologies</span>.  
            Passionate about building scalable web applications that make an impact.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection("projects")} className="btn-primary">
              <IoRocketSharp className="btn-icon" />
              View My Work
            </button>
            <button onClick={() => scrollToSection("contact")} className="btn-secondary">
              <MdEmail className="btn-icon" />
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side - Video and Floating Skills */}
        <div className="right-side-container">
          <div className="hero-video">
            <video
              ref={videoRef}
              src="medium-vecteezy_youtube-channel-presentation-on-all-devices-2d-motion_57689543_medium.mp4"
              autoPlay
              onEnded={handleVideoEnded}
              controls={false}
              muted
              playsInline
            />
          </div>

          {/* Show floating skills only after video ended */}
          <div className={`skills-container ${videoEnded ? "show-skills" : "hidden"}`}>
            <div className="floating-skill skill-1">React.js</div>
            <div className="floating-skill skill-2">Node.js</div>
            <div className="floating-skill skill-3">TypeScript</div>
            <div className="floating-skill skill-4">MongoDB</div>
            <div className="floating-skill skill-5">Express.js</div>
            <div className="floating-skill skill-6">HTML5</div>
            <div className="floating-skill skill-7">CSS3</div>
            <div className="floating-skill skill-8">JavaScript</div>
            <div className="floating-skill skill-9">SQL</div>
            <div className="floating-skill skill-10">Git</div>
            {/* <div className="floating-skill skill-11">Next.js</div> */}
            <div className="floating-skill skill-12">Tailwind</div>
          </div>
        </div>
      </div>
    </section>
  )
}
