"use client"
import { useEffect, useState } from "react"
import "./projects.css"
import { RxCross2 } from "react-icons/rx"
import { ExternalLink, Github, Info } from "lucide-react"

const projects = [
  {
    title: "Glowison Graphics",
    thumbnail: "glowison-thumbnail.png",

    description:
      "A full-stack e-commerce catalog and digital storefront built for a custom laser-cutting business. It features dynamic product browsing, a persistent local cart, WhatsApp-integrated checkout, and a secure admin dashboard for content management.",

    details:
      "Glowison Graphics is a digital storefront built for a manufacturing business specializing in custom laser-cut sign boards, acrylic name plates, and personalized decor. Rather than a traditional e-commerce payment flow, the platform allows customers to browse products, add them to a local storage-based cart, and seamlessly check out via a WhatsApp integration that generates a fully formatted order summary. I also developed a comprehensive admin dashboard to allow the business to manage categories, products, hero slides, and gallery items dynamically. The frontend is highly optimized for SEO and utilizes modern animations for a premium user experience.",

    challenges:
      "The primary challenge was designing a robust local storage cart system that accurately handles variable product attributes (colors, sizes) and formats complex order data into a clean WhatsApp message. Additionally, building a seamless admin experience with Prisma and PostgreSQL to handle complex relational data (categories, subcategories, products, and images) required careful database architecture and state management.",

    outcomes:
      "Delivered a fast, SEO-optimized, and production-ready catalog website that drives direct customer inquiries to the business's WhatsApp. The custom admin dashboard empowers the business owners to maintain their digital catalog independently without needing to touch the codebase.",

    futureScope:
      "Future enhancements include integrating direct online payment processing, customer accounts for order history tracking, and automated inventory notifications.",

    images: [],

    technologies: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Framer Motion",
      "Supabase"
    ],

    duration: "2024",
    role: "Full Stack Developer",
    teamSize: 1,

    responsibilities: [
      "Developed the frontend catalog using Next.js and React",
      "Built a persistent local storage cart system for seamless browsing",
      "Integrated a custom WhatsApp checkout flow that generates formatted order summaries",
      "Designed the PostgreSQL database architecture using Prisma ORM",
      "Developed a secure admin dashboard for managing products, categories, and site content",
      "Implemented modern UI animations using Framer Motion and Three.js",
      "Optimized the platform for local SEO and integrated Google Analytics",
      "Handled image uploads and delivery optimizations"
    ],

    liveUrl: "https://www.glowison.in",
  },
  {
    title: "Sheetal Sweets",
    thumbnail: "sheetal-thumbnail.png",

    description:
      "A full-stack business management platform built for a local sweets & bakery brand, enabling dynamic content control, product management, and a strong digital presence.",

    details:
      "Sheetal Sweets (sheetalsweets.in) is a complete digital transformation of a traditional sweets business. The platform includes a dynamic website and a custom admin dashboard for real-time management of products, categories, and content. Built with a focus on scalability and performance, the system ensures smooth data flow between backend and frontend while delivering a clean and responsive user experience.",

    challenges:
      "Coordinating development across multiple contributors while maintaining consistent code structure and performance was a key challenge. Additionally, handling dynamic data, image uploads, and ensuring real-time reflection of admin changes on the frontend required careful API and database design.",

    outcomes:
      "Delivered a production-ready system that enhances business operations and digital visibility. Enabled non-technical users to manage website content independently, reducing dependency on developers and improving operational efficiency.",

    futureScope:
      "Planned updates include online order placement, customer feedback management, and automated order notifications.",

    images: [
      { title: "Homepage", items: ["sheetal-homepage.png"] },
      { title: "Product Menupage", items: ["sheetal-menu.png"] },
      { title: "Navbar Mega Menu", items: ["sheetal-mega-menu.png"] },
      { title: "Contact Page", items: ["sheetal-contact.png"] },
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
      "Led frontend development and UI/UX implementation",
      "Developed core backend APIs and handled frontend-backend integration",
      "Built key modules of the admin dashboard (product & category management)",
      "Implemented image upload system using Multer",
      "Collaborated with team members to maintain clean architecture and code consistency",
      "Participated in deployment and production setup"
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
        <div className="projects-header">
          <h2 className="section-title brutal-title">Featured Work</h2>
          <div className="brutal-badge">Latest.Exe</div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-top-bar">
                <div className="dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="bar-title">{project.title.toLowerCase().replace(/\s+/g, "_")}.exe</div>
              </div>

              <div className="project-image-wrapper">
                <div className="project-image">
                  <img src={`/${project.thumbnail}`} alt={project.title} />
                </div>
                <div className="project-overlay">
                  <button className="btn-primary brutal-btn popup-btn" onClick={() => setSelectedProject(project)}>
                    View Details
                  </button>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech: string, i: number) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a href={project.liveUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} /> Live
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a href={project.githubUrl} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                      <Github size={20} /> Code
                    </a>
                  )}
                  <button className="btn-more" onClick={() => setSelectedProject(project)}>
                    <Info size={20} /> More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Screen Modal */}
        {selectedProject && (
            <div className="modal-content fullscreen">

              <div className="modal-top-bar">
                <div className="dots">
                  <span className="dot red" onClick={() => setSelectedProject(null)}></span>
                  <span className="dot yellow" onClick={() => setSelectedProject(null)}></span>
                  <span className="dot green"></span>
                </div>
                <div className="bar-title">SYSTEM_VIEWER // {selectedProject.title.toUpperCase()}</div>
                <button className="btn-close-modal" onClick={() => setSelectedProject(null)}>
                  <RxCross2 />
                </button>
              </div>

              <div className={`modal-body ${selectedProject.images && selectedProject.images.length > 0 ? '' : 'no-images'}`}>
                {/* Left Section */}
                <div className="modal-left">
                  <div className="modal-header-box">
                    <h2 className="modal-title">{selectedProject.title}</h2>
                    <div className="brutal-tag">PROJECT_DETAILS.TXT</div>
                  </div>

                  <p className="modal-description">{selectedProject.details}</p>

                  <div className="modal-meta-grid">
                    <div className="meta-box">
                      <span className="meta-label">Role</span>
                      <span className="meta-value">{selectedProject.role}</span>
                    </div>
                    <div className="meta-box">
                      <span className="meta-label">Team Size</span>
                      <span className="meta-value">{selectedProject.teamSize}</span>
                    </div>
                    <div className="meta-box">
                      <span className="meta-label">Duration</span>
                      <span className="meta-value">{selectedProject.duration}</span>
                    </div>
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
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                      <a href={selectedProject.githubUrl} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                        <Github size={20} /> View Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Section (Images) */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="modal-right">
                  <div className="modal-images">
                    {selectedProject.images.map((section: any, idx: number) => (
                      <div key={idx} className="image-section">
                        <h4 className="image-title">[{section.title}]</h4>
                        <div className="image-grid">
                          {section.items.map((img: string, i: number) => (
                            <div className="img-wrapper" key={i}>
                              <img
                                src={`/${img}`}
                                alt={`${section.title} ${i + 1}`}
                                className="modal-img"
                                onClick={() => setLightboxImage(`/${img}`)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                )}
              </div>
            </div>
        )}

        {/* Lightbox Overlay */}
        {lightboxImage && (
          <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="card-top-bar">
                <div className="dots">
                  <span className="dot red" onClick={() => setLightboxImage(null)}></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="bar-title">IMAGE_VIEWER.EXE</div>
                <button className="btn-close-modal" onClick={() => setLightboxImage(null)}>
                  <RxCross2 />
                </button>
              </div>
              <img src={lightboxImage} alt="Preview" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
