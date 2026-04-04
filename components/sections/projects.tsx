// import "./projects.css"

// const projects = [
//   {
//     title: "ZepX",
//     description:
//       "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
//     image: "zepxThumbnail-CZzajLvP.png",
//     technologies: ["React", "Node.js", "MongoDB", "Stripe"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
// ]

// export default function Projects() {
//   return (
//     <section id="projects" className="projects section">
//       <div className="container">
//         <h2 className="section-title">Featured Projects</h2>

//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div key={index} className="project-card">
//               <div className="project-image">
//                 <img
//                   src={project.image || "/placeholder.svg?height=200&width=400&query=project screenshot"}
//                   alt={project.title}
//                 />
//               </div>

//               <div className="project-content">
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-description">{project.description}</p>

//                 <div className="tech-stack">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span key={techIndex} className="tech-badge">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="project-links">
//                   <a href={project.liveUrl} className="btn-primary">
//                     Live Demo
//                   </a>
//                   <a href={project.githubUrl} className="btn-secondary">
//                     View Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }





"use client"
import { useEffect, useState } from "react"
import "./projects.css"
import { RxCross2 } from "react-icons/rx"

const projects = [
 {
    title: "Sheetal Sweets",
    thumbnail: "sheetal-thumbnail.png",
    description:
      "A fully dynamic bakery & sweets platform with an admin dashboard, built to digitize a traditional business and manage content efficiently in real-time.",
    
    details:
      "Sheetal Sweets (sheetalsweets.in) is a complete dynamic website developed from scratch, including both frontend and admin dashboard. The platform allows real-time management of products, categories, and website content through a custom-built admin panel. Designed with a mobile-first approach, the site delivers a smooth browsing experience while enabling the business owner to update products and information without technical knowledge.",
    
    challenges:
      "Building a scalable structure that supports dynamic data while maintaining high performance was a key challenge. Handling image uploads, optimizing API responses, and ensuring smooth admin-to-frontend data flow required careful backend planning and efficient state management.",
    
    outcomes:
      "Delivered a production-ready digital solution that not only improves brand presence but also simplifies business operations through an easy-to-use dashboard. The system enables quick updates, reduces manual effort, and enhances customer interaction with the brand.",
    
    futureScope:
      "😑😑😑😑",
    
    images: [
      { title: "Homepage", items: ["sheetal-home.png"] },
      { title: "Product Section", items: ["sheetal-products.png"] },
      { title: "Admin Dashboard", items: ["sheetal-dashboard.png"] },
      { title: "Content Management", items: ["sheetal-admin-products.png"] },
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Multer",
      "TailwindCSS"
    ],

    duration: "2025",
    role: "Full Stack Developer",
    teamSize: 3,

    responsibilities: [
      "Developed full-stack dynamic website with API integration",
      "Built admin dashboard for managing products, categories, and content",
      "Implemented image upload system using Multer",
      "Designed responsive UI with smooth user experience",
      "Structured MySQL database and optimized queries",
      "Handled complete deployment and production setup"
    ],

    liveUrl: "https://sheetalsweets.in",
  },
  {
    title: "ZepX",
    thumbnail: "zepxThumbnail-CZzajLvP.png",
    description:
      "An e-commerce platform built with React and Node.js, featuring secure payments, Google authentication, and a dynamic product system.",
    details:
      "ZepX is a custom e-commerce solution where I integrated login/sign-up (with both Google OAuth and manual signup), Razorpay payment gateway, and dynamic product loading with a 'Load More' feature for better performance. Everything is fully dynamic, from product listings to categories, without overloading the frontend. I also created an admin dashboard for managing categories, products, users, admins, and viewing feedback.",
    challenges:
      "One major challenge was ensuring secure and smooth integration of Razorpay with dynamic cart updates. I also worked on optimizing queries with MySQL (phpMyAdmin) to handle large product data efficiently.",
    outcomes:
      "The platform provides a smooth shopping experience, faster loading via 'Load More', and an easy-to-manage backend for admins. It’s flexible enough to handle new features and scale over time.",
    futureScope:
      "Planned improvements include integrating coupon systems, order tracking, and adding analytics to the admin dashboard.",

    images: [
      { title: "Homepage", items: ["home-page.png"] },
      { title: "Product Listing", items: ["products-page.png"] },
      { title: "Product details", items: ["products-item.png"] },
      { title: "About-Us Page", items: ["about-page.png"] },
      { title: "Contact-Us Page", items: ["screencapture-localhost-3000-contact-us-2025-08-22-16_10_30.png"] },
      { title: "User Dashboard", items: ["screencapture-localhost-3000-user-2025-08-22-16_11_03.png"] },
      { title: "Login & Signup", items: ["screencapture-localhost-3000-login-2025-08-22-16_12_44.png"] },
      { title: "Cart Page", items: ["screencapture-localhost-3000-cart-2025-08-22-16_11_19.png"] },
      { title: "Checkout Page", items: ["screencapture-localhost-3000-checkout-2025-08-22-16_12_14.png"] },
      { title: "Razorpay Payment", items: ["zepxThumbnail-CZzajLvP.png"] },
      {
        title: "Admin Dashboard",
        items: [
          "product-dashboard.png",
          "add-product-dashboard.png",
          "offer-dashboard.png",
        ],
      },
    ],

    technologies: ["React", "Node.js", "MySQL (phpMyAdmin)", "Razorpay", "TailwindCSS"],
    duration: "Jan 2024 – Apr 2024",
    role: "Full Stack Developer",
    teamSize: 1,
    responsibilities: [
      "Integrated Google OAuth and manual authentication",
      "Implemented Razorpay payment gateway",
      "Built dynamic product listing with Load More functionality",
      "Developed admin dashboard for categories, products, users, and feedback",
      "Designed MySQL schema and optimized queries",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/AlkamaSunasara00/zepx",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    const isLocked = selectedProject || lightboxImage;
    if (isLocked) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [selectedProject, lightboxImage])

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={`/${project.thumbnail}`} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a href={project.liveUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a href={project.githubUrl} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  )}
                  <button className="btn-more" onClick={() => setSelectedProject(project)}>
                    More Details
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Full Screen Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content fullscreen" onClick={(e) => e.stopPropagation()}>
              <button className="btn-close" onClick={() => setSelectedProject(null)}>
                <RxCross2 />
              </button>

              {/* Left Section */}
              <div className="modal-left">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.details}</p>

                <div className="modal-meta">
                  <p><strong>Role:</strong> {selectedProject.role}</p>
                  <p><strong>Team Size:</strong> {selectedProject.teamSize}</p>
                  <p><strong>Duration:</strong> {selectedProject.duration}</p>
                </div>

                <div className="modal-subsection">
                  <h4>Responsibilities</h4>
                  <ul>
                    {selectedProject.responsibilities.map((task: string, i: number) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-subsection">
                  <h4>Challenges</h4>
                  <p>{selectedProject.challenges}</p>
                </div>

                <div className="modal-subsection">
                  <h4>Outcomes</h4>
                  <p>{selectedProject.outcomes}</p>
                </div>

                <div className="modal-subsection">
                  <h4>Future Scope</h4>
                  <p>{selectedProject.futureScope}</p>
                </div>

                <div className="modal-tech">
                  {selectedProject.technologies.map((tech: string, i: number) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="modal-links">
                  {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                    <a href={selectedProject.liveUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                    <a href={selectedProject.githubUrl} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  )}
                </div>

              </div>

              {/* Right Section (Images) */}
              <div className="modal-right">
                <div className="modal-images">
                  {selectedProject.images.map((section: any, idx: number) => (
                    <div key={idx} className="image-section">
                      <h4 className="image-title">{section.title}</h4>
                      <div className="image-grid">
                        {section.items.map((img: string, i: number) => (
                          <img
                            key={i}
                            src={`/${img}`}
                            alt={`${section.title} ${i + 1}`}
                            className="modal-img"
                            onClick={() => setLightboxImage(`/${img}`)} // ✅ open big view
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lightbox Overlay */}
        {lightboxImage && (
          <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
            <img src={lightboxImage} alt="Preview" />
            <button className="btn-close" onClick={() => setLightboxImage(null)}>
              <RxCross2 />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
