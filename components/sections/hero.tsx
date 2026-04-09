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

        {/* Right Side - Brutalist Code Terminal */}
        <div className="relative h-[380px] sm:h-[450px] lg:h-[550px] w-full mt-12 lg:mt-0 flex items-center justify-center pointer-events-none group perspective-1000">
           
           <div className="w-full max-w-[500px] bg-white border-[4px] sm:border-8 border-black shadow-[10px_10px_0px_0px_var(--primary)] sm:shadow-[20px_20px_0px_0px_var(--primary)] flex flex-col relative z-10 transition-transform duration-500 sm:rotate-y-[-10deg] sm:rotate-x-[5deg] group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:-translate-y-4">
              {/* Top Bar */}
              <div className="flex justify-between items-center bg-neo-muted border-b-[4px] sm:border-b-8 border-black p-3 sm:p-4">
                <div className="flex gap-2">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] border-black bg-neo-accent"></span>
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] border-black bg-neo-secondary"></span>
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] border-black bg-[#4ADE80]"></span>
                </div>
                <span className="font-mono font-black uppercase text-xs sm:text-sm tracking-widest">alkama.exe</span>
              </div>
              
              {/* Terminal Body */}
              <div className="p-4 sm:p-6 font-mono text-[11px] sm:text-[14px] font-bold bg-[#1A1A1A] text-[#E5E5E5] h-full flex flex-col gap-1.5 relative overflow-hidden text-left leading-relaxed break-words whitespace-pre-wrap">
                <div className="text-[#4ADE80] mb-2 font-normal break-all">
                  <span className="text-white">alkama@server:~$</span> {"curl -X GET https://api.alkama.dev/status"}
                </div>
                <div className="text-gray-500 text-[10px] sm:text-xs mb-2">{'HTTP/2 200 OK'}</div>
                <div>{'{'}</div>
                <div className="pl-3 sm:pl-6"><span className="text-[#FF6B6B]">"system_status"</span>: <span className="text-[#4ADE80]">"ONLINE"</span>,</div>
                <div className="pl-3 sm:pl-6"><span className="text-[#FF6B6B]">"uptime_nodes"</span>: <span className="text-[#FFD93D]">"Stable"</span>,</div>
                <div className="pl-3 sm:pl-6"><span className="text-[#FF6B6B]">"core_competencies"</span>: [</div>
                <div className="pl-6 sm:pl-12 text-[#4ADE80]">"Complex API Architecture",</div>
                <div className="pl-6 sm:pl-12 text-[#4ADE80]">"High-Performance UI/UX",</div>
                <div className="pl-6 sm:pl-12 text-[#4ADE80]">"Database Optimization"</div>
                <div className="pl-3 sm:pl-6">],</div>
                <div className="pl-3 sm:pl-6"><span className="text-[#FF6B6B]">"coffee_level"</span>: <span className="text-[#FFD93D]">100</span>,</div>
                <div className="pl-3 sm:pl-6"><span className="text-[#FF6B6B]">"current_task"</span>: <span className="text-[#4ADE80]">"Scaling solutions..."</span></div>
                <div>{'}'}</div>
                
                <div className="mt-4 flex items-center gap-2 font-normal">
                  <span className="text-white">alkama@server:~$</span> <span className="w-2 h-4 sm:w-2.5 sm:h-5 bg-white inline-block animate-[pulse_1s_infinite]"></span>
                </div>
              </div>
           </div>

           {/* Decorative Tags */}
           <div className="absolute top-12 right-2 sm:top-32 sm:right-4 lg:-right-4 bg-neo-secondary border-[3px] sm:border-4 border-black px-2 sm:px-4 py-1 sm:py-2 font-black uppercase text-sm sm:text-xl shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] rotate-6 z-20">
             100% Reliable
           </div>
           
           <div className="absolute bottom-8 left-76 sm:bottom-10 sm:left-86 lg:left-96 bg-neo-accent text-white border-[3px] sm:border-4 border-black px-4 sm:px-6 py-2 sm:py-3 font-black uppercase text-sm sm:text-xl shadow-[4px_4px_0px_#000] sm:shadow-[8px_8px_0px_#000] -rotate-6 z-20">
             Hire Me
           </div>
        </div>

      </div>
    </section>
  )
}
