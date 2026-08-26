import "./experience.css"

const experiences = [
  {
    company: "Quba Infotech",
    location: "Chhapi, Gujarat, India · On-site",
    period: "7 mos",
    logo: "/logos/quba_infotech_logo.jfif",
    roles: [
      {
        title: "MERN Stack Developer",
        type: "Full-time",
        period: "Jun 2026 – Present · 3 mos",
        responsibilities: [
          "Building and maintaining high-performance full-stack applications using React.js, Next.js, Node.js, and MongoDB.",
          "Delivering scalable solutions, optimizing user experiences, and driving product development.",
        ],
      },
      {
        title: "MERN Stack Developer Intern",
        type: "Internship",
        period: "Feb 2026 – May 2026 · 4 mos",
        responsibilities: [
          "Contributed to the development of scalable web applications using React.js, Next.js, Node.js, and MongoDB.",
          "Collaborated on frontend, backend, API integration, and feature implementation in a fast-paced environment.",
        ],
      }
    ]
  },
  {
    company: "Reecomm",
    location: "Chhapi, Gujarat, India · On-site",
    period: "7 mos",
    logo: "/logos/reecomm_logo.png",
    roles: [
      {
        title: "MERN Stack Developer",
        type: "Full-time",
        period: "Feb 2026 – Present · 7 mos",
        responsibilities: [
          "Engaged in full-time MERN stack development.",
        ],
      }
    ]
  },
  {
    company: "Valudas Technologies Pvt. Ltd.",
    location: "Remote",
    period: "9 mos",
    logo: "/logos/valudastechpark_logo.jfif",
    roles: [
      {
        title: "Web Developer Trainee",
        type: "Apprenticeship",
        period: "May 2025 – Jan 2026 · 9 mos",
        responsibilities: [
          "Assisted in development and maintenance of web applications using React.js, Node.js, and MySQL",
          "Created responsive user interfaces and dashboards with HTML, CSS, and JavaScript",
          "Integrated REST APIs for CRUD operations and improved backend connectivity",
          "Implemented admin features like category filtering, product management, and login system",
          "Worked with Multer for file uploads and learned Git version control in team environment",
          "Contributed to building ZepX – an internal electronics e-commerce platform",
        ],
      }
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="card-stack-container">
          <div className="main-timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="card-stack-item"
              style={{ 
                '--index': index,
                zIndex: index + 10
              } as React.CSSProperties}
            >
              <div className="timeline-number-badge">
                0{index + 1}
              </div>
              
              <div className="bento-card">
              
              <div className="company-header">
                  <div className="company-logo-placeholder">
                    {exp.logo ? (
                      <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                    ) : (
                      <div className="logo-fallback">{exp.company.charAt(0)}</div>
                    )}
                  </div>
                  <div className="company-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="company-meta">{exp.period}</p>
                    <p className="company-meta">{exp.location}</p>
                  </div>
                </div>

                <div className="roles-container">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className={`role-item ${exp.roles.length > 1 ? 'has-timeline' : ''}`}>
                      {exp.roles.length > 1 && <div className="role-timeline-line"></div>}
                      {exp.roles.length > 1 && <div className="role-dot"></div>}
                      
                      <h4 className="job-title">{role.title}</h4>
                      <p className="role-meta">{role.type}</p>
                      <p className="period">{role.period}</p>
                      
                      {role.responsibilities.length > 0 && (
                        <ul className="responsibilities">
                          {role.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
