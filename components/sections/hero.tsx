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

import { ReactTyped } from "react-typed";
import { IoRocketSharp, IoOpenOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import React, { useState, useRef, useEffect } from "react";

import "./hero.css";

export default function Hero() {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1.5;
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVideoEnded = () => setVideoEnded(true);

  // ----- 3-D Card data (replace with your own projects) -----
  const cards = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack MERN app with Stripe payments & admin dashboard.",
      tech: "React • Node • MongoDB",
      link: "https://github.com/alkama/ecommerce",
    },
    {
      title: "TaskFlow SaaS",
      desc: "Real-time collaborative task manager built with Next.js.",
      tech: "Next.js • Tailwind • Prisma",
      link: "https://github.com/alkama/taskflow",
    },
    {
      title: "AI Chat Widget",
      desc: "Embeddable chat UI powered by OpenAI API.",
      tech: "TypeScript • Express • Socket.io",
      link: "https://github.com/alkama/ai-chat",
    },
  ];

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        {/* ---------- LEFT – TEXT ---------- */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Alkama Sunasara</span>
          </h1>

          <h2 className="hero-subtitle">
            <ReactTyped
              strings={[
                "Full Stack Developer",
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
            Crafting digital experiences with{" "}
            <span className="highlight">clean code</span> and{" "}
            <span className="highlight">modern technologies</span>. Passionate
            about building scalable web applications that make an impact.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection("projects")}
              className="btn-primary"
            >
              <IoRocketSharp className="btn-icon" />
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-secondary"
            >
              <MdEmail className="btn-icon" />
              Contact Me
            </button>
          </div>
        </div>

        {/* ---------- RIGHT – VIDEO + 3D CARDS ---------- */}
        <div className="right-side-container">
          {/* Video */}
          <video
            ref={videoRef}
            src="medium-vecteezy_youtube-channel-presentation-on-all-devices-2d-motion_57689543_medium.mp4"
            autoPlay
            muted
            playsInline
            controls={false}
            onEnded={handleVideoEnded}
            className="hero-video"
          />

          {/* 3-D Cards – appear after video ends */}
          <div className={`cards-wrapper ${videoEnded ? "show" : ""}`}>
            {cards.map((c, i) => (
              <div
                key={i}
                className={`project-card card-${i + 1}`}
                style={{ "--delay": `${i * 0.2}s` } as React.CSSProperties}
              >
                <div className="card-inner">
                  <h3 className="card-title">{c.title}</h3>
                  <p className="card-desc">{c.desc}</p>
                  <span className="card-tech">{c.tech}</span>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    View <IoOpenOutline />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}