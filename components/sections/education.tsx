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
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="edu-ticket">
          <div className="ticket-left">
            <div className="edu-badge">Education</div>
            <h3 className="edu-degree">{education.degree}</h3>
            <p className="edu-institution">{education.institution}</p>
            <p className="edu-description">{education.description}</p>
          </div>
          <div className="ticket-right">
            <div className="edu-year">2024</div>
            <div className="edu-divider">TO</div>
            <div className="edu-year">2027</div>
            <div className="stamp">IN PROGRESS</div>
          </div>
        </div>
      </div>
    </section>
  )
}
