import { FaGraduationCap, FaBarcode, FaUniversity, FaAward, FaCertificate } from "react-icons/fa"
import "./education.css"

const educationData = {
  degree: "BSc-IT (Bachelor of Science in IT )",
  institution: "Gokul Global University",
  location: "Siddhpur, Gujarat, India",
  period: "2024 – 2027",
  status: "IN PROGRESS",
  description:
    "Currently pursuing BSc-IT with a focus on software development, web technologies, and database management.",
}

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="container flex flex-col items-center">
        <h2 className="section-title">Education</h2>

        <div className="edu-ticket-wrapper">
          <div className="edu-ticket">

            {/* Left Ticket Main Body */}
            <div className="ticket-left">
              <div className="edu-badge">ADMISSION TICKET</div>

              <h3 className="edu-degree">{educationData.degree}</h3>
              
              <div className="edu-institution-box">
                <FaUniversity className="text-[#FF6B6B]" />
                <span className="font-bold">{educationData.institution}</span>
                <span className="bullet">•</span>
                <span className="text-sm font-semibold opacity-80">{educationData.location}</span>
              </div>

              <p className="edu-description">{educationData.description}</p>

              {/* Circular Stickers below description */}
              <div className="ticket-circular-stickers">
                <div className="circular-sticker sticker-yellow">
                  <FaGraduationCap className="sticker-icon" />
                  <span className="sticker-label">GRAD 2027</span>
                </div>
                <div className="circular-sticker sticker-coral">
                  <FaAward className="sticker-icon" />
                  <span className="sticker-label">VERIFIED</span>
                </div>
                <div className="circular-sticker sticker-black">
                  <FaCertificate className="sticker-icon" />
                  <span className="sticker-label">BSC-IT DEPT</span>
                </div>
              </div>
            </div>

            {/* Right Ticket Perforated Stub */}
            <div className="ticket-right">
              <div className="stub-label">TIMELINE</div>
              <div className="edu-year">2024</div>
              <div className="edu-divider">TO</div>
              <div className="edu-year">2027</div>

              {/* Rectangular Sticker */}
              <div className="progress-sticker">
                <span className="sticker-dot"></span>
                <span>IN PROGRESS</span>
              </div>

              {/* Barcode Sticker */}
              <div className="ticket-barcode-box">
                <FaBarcode className="size-8 text-black" />
                <span className="barcode-num">*GGU-BSCIT-2027*</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
