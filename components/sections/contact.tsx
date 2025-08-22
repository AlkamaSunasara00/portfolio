// "use client"

// import "./contact.css"

// export default function Contact() {
//   return (
//     <section id="contact" className="contact section">
//       <div className="container">
//         <h2 className="section-title">Get In Touch</h2>

//         <div className="contact-content">
//           <div className="contact-info">
//             <h3>Let's Connect</h3>
//             <p>
//               I'm always interested in hearing about new opportunities and exciting projects. 
//               Whether you have a question or just want to say hi, feel free to reach out!
//             </p>

//             <div className="contact-details">
//               <div className="contact-item">
//                 <strong>Email:</strong>
//                 <a href="mailto:sunasaraalkama0000@gmail.com">
//                   sunasaraalkama0000@gmail.com
//                 </a>
//               </div>
//               <div className="contact-item">
//                 <strong>LinkedIn:</strong>
//                 <a
//                   href="https://www.linkedin.com/in/alkama-sunasara-b682a3316"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   linkedin.com/in/alkama-sunasara
//                 </a>
//               </div>
//               <div className="contact-item">
//                 <strong>GitHub:</strong>
//                 <a
//                   href="https://github.com/AlkamaSunasara00"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   github.com/alkama-sunasara
//                 </a>
//               </div>
//               <div className="contact-item">
//                 <strong>Phone:</strong>
//                 <a href="tel:+919978750622">+91 99787 50622</a>
//               </div>
//               <div className="contact-item">
//                 <strong>Location:</strong>
//                 Palanpur, Gujarat, India
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import "./contact.css"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";





export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p>
            I’m passionate about building web applications and collaborating on exciting projects. 
            If you’d like to connect, here are the best ways to reach me:
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="contact-grid">
          <div className="contact-item">
            <span className="icon"><MdEmail />
</span>
            <div>
              <strong>Email</strong>
              <a href="mailto:sunasaraalkama0000@gmail.com">alkama.codespace@gmail.com</a>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon"><FaLinkedin />
</span>
            <div>
              <strong>LinkedIn</strong>
              <a
                href="https://www.linkedin.com/in/alkama-sunasara-b682a3316"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/alkama-sunasara-b682a3316
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon"><FaGithubSquare />
</span>
            <div>
              <strong>GitHub</strong>
              <a
                href="https://github.com/AlkamaSunasara00"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/AlkamaSunasara00
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon"><FaSquarePhone />
</span>
            <div>
              <strong>Phone</strong>
              <a href="tel:+919978750622">+91 99787 50622</a>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon"><FaLocationDot />
</span>
            <div>
              <strong>Location</strong>
              <p>Palanpur, Gujarat, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
