"use client"

import { ReactTyped } from "react-typed"
import { IoRocketSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import React from "react"
import "./hero.css"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const floatingSkills = [
    { name: "React.js", style: "skill-1 bg-neo-accent text-white" },
    { name: "Node.js", style: "skill-2 bg-neo-secondary text-black" },
    { name: "TypeScript", style: "skill-3 bg-neo-muted text-black" },
    { name: "MongoDB", style: "skill-4 bg-white text-black" },
    { name: "Express", style: "skill-5 bg-neo-accent text-white" },
    { name: "HTML5", style: "skill-6 bg-neo-secondary text-black" },
    { name: "CSS3", style: "skill-7 bg-white text-black" },
    { name: "SQL", style: "skill-8 bg-neo-muted text-black" },
    { name: "Next.js", style: "skill-9 bg-neo-accent text-white" },
    { name: "Tailwind", style: "skill-10 bg-neo-secondary text-black" },
  ];

  return (
    <section id="hero" className="w-full min-h-screen flex items-center pt-32 pb-12 overflow-hidden border-b-8 border-black">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full h-full">
        {/* Left Side - Text */}
        <div className="flex flex-col gap-6 lg:gap-8 z-20">
          <div className="inline-block border-4 border-black bg-neo-secondary px-4 py-2 w-max shadow-[4px_4px_0px_0px_transparent] lg:shadow-[6px_6px_0px_0px_#000] -rotate-2 hover:rotate-0 transition-transform duration-200">
            <h2 className="font-black text-lg sm:text-xl uppercase tracking-widest text-black">
              Full Stack Developer
            </h2>
          </div>
          
          <h1 className="text-[14vw] sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-black drop-shadow-[4px_4px_0px_#FFD93D]">
            Hi, I'm <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px black", WebkitTextFillColor: "transparent" }}>Alkama</span>
            <br />
            <span className="bg-neo-accent text-white px-2 border-4 border-black shadow-[6px_6px_0px_0px_#000] inline-block mt-2 lg:mt-4 rotate-1">Sunasara</span>
          </h1>

          <div className="text-xl sm:text-2xl font-bold max-w-lg leading-snug text-black bg-white border-4 border-black p-4 lg:p-6 shadow-[6px_6px_0px_0px_#000] -rotate-1 mt-4">
            <p className="mb-2">Crafting digital experiences with</p>
            <ReactTyped
              strings={[
                "clean code.",
                "modern tech.",
                "absolute chaos.",
                "React & Node."
              ]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1200}
              loop
              className="text-neo-secondary uppercase tracking-widest bg-black px-2 mt-1 inline-block"
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <button onClick={() => scrollToSection("projects")} className="btn-primary text-lg sm:text-lg px-6 py-4 flex items-center gap-2">
              <IoRocketSharp className="size-6" />
              View Work
            </button>
            <button onClick={() => scrollToSection("contact")} className="btn-secondary text-lg sm:text-lg px-6 py-4 bg-white flex items-center gap-2">
              <MdEmail className="size-6" />
              Contact
            </button>
          </div>
        </div>

        {/* Right Side - Floating Stickers Canvas */}
        <div className="relative h-[500px] lg:h-[700px] w-full mt-12 lg:mt-0 right-side-container hidden sm:block">
           {floatingSkills.map((skill, index) => (
             <div key={index} className={`floating-skill ${skill.style}`}>
                {skill.name}
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
