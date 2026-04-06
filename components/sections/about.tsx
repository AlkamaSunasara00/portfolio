"use client"
import "./about.css"
import ProfileCard from "../ui/ProfileCard"

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-image flex items-center justify-center">
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
              onContactClick={() => console.log('Contact clicked')}
              behindGlowColor="rgba(115, 160, 155, 0.47)"
              iconUrl="https://placehold.co/100x100/0e152e/white?text=</>"
              behindGlowEnabled={true}
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 50%)"
            />
          </div>

          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with expertise in modern web
              technologies. Born and raised in Gujarat, I bring a unique perspective
              to problem-solving and have a deep appreciation for clean, efficient
              code.
            </p>
            <p>
              My journey in tech started with curiosity about how websites work, and
              it has evolved into a career focused on creating meaningful digital
              experiences. I specialize in React, Node.js, and database technologies,
              always staying current with industry best practices.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>

            <div className="resume-actions">
              {/* Open in new tab */}
              <a
                href="/Alkama Resume.pdf"
                className="btn-view"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>

              {/* Download directly */}
              <a href="/Alkama Resume.pdf" className="btn-save" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
