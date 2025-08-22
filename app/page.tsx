import Navbar from "@/components/navbar"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"
import Hero from "@/components/sections/hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer/>
    </main>
  )
}
