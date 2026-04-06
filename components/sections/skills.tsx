import "./skills.css"

const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "React Native"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    skills: ["Git", "Vercel", "VS Code", "Postman"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="skills-header">
          <h2 className="title-massive">Arsenal</h2>
          {/* <div className="title-decoration"></div> */}
        </div>

        <div className="skills-wrapper">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-window">
              <div className="skill-window-header">
                <h3 className="skill-window-title">{category.category}</h3>
                <div className="window-controls">
                  <span className="window-btn"></span>
                  <span className="window-btn"></span>
                  <span className="window-btn"></span>
                </div>
              </div>
              <div className="skill-window-content">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
