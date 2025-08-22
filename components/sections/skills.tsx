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
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category">{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
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
