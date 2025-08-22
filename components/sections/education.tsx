import "./education.css"

const education = {
  degree: "Bachelor of Information Technology",
  institution: "Gokul Global University",
  period: "June 2024 – June 2027*",
  description:
    "Currently pursuing Bachelor of Information Technology with a focus on software development, web technologies, and database management.",
}

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-content">
          <div className="education-card">
            <h3 className="degree">{education.degree}</h3>
            <p className="institution">{education.institution}</p>
            <p className="period">{education.period}</p>
            <p className="description">{education.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
