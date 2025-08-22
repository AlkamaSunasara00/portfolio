import "./experience.css"

const experiences = [
{
  title: "Web Developer Trainee",
  company: "Valudas Technologies Pvt. Ltd.",
  period: "June 2024 – Present",
  responsibilities: [
    "Assisted in development and maintenance of web applications using React.js, Node.js, and MySQL",
    "Created responsive user interfaces and dashboards with HTML, CSS, and JavaScript",
    "Integrated REST APIs for CRUD operations and improved backend connectivity",
    "Implemented admin features like category filtering, product management, and login system",
    "Worked with Multer for file uploads and learned Git version control in team environment",
    "Contributed to building ZepX – an internal electronics e-commerce platform",
  ],
},

]

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="job-title">{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
