import "./about.css"

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-image">
            <img
              src="/developer-headshot-bw.jpg"
              alt="Alkama Sunasara - Profile Photo"
              className="profile-photo"
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
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>

              {/* Download directly */}
              <a href="/Alkama Resume.pdf" className="btn-secondary" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
