import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiExpo,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiJsonwebtokens,
  SiCloudinary,
  SiGoogle
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { TbApi } from "react-icons/tb"
import { FaTerminal, FaCode, FaDatabase, FaMobileAlt, FaTools, FaPlug } from "react-icons/fa"
import "./skills.css"

const categories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    code: "UI & UX",
    accentColor: "#FF6B6B",
    icon: <FaCode />,
    span: "col-span-12",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] bg-black p-0.5 rounded-xs" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" />, featured: true },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" />, featured: true },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    code: "API & AUTH",
    accentColor: "#00F5D4",
    icon: <FaTerminal />,
    span: "col-span-12 lg:col-span-7",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, featured: true },
      { name: "Express.js", icon: <SiExpress className="text-black" /> },
      { name: "REST APIs", icon: <TbApi className="text-[#FF6B6B]" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-[#000000]" /> },
    ],
  },
  {
    id: "database",
    title: "Database & ORM",
    code: "DATA STORE",
    accentColor: "#A3E635",
    icon: <FaDatabase />,
    span: "col-span-12 lg:col-span-5",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "Prisma", icon: <SiPrisma className="text-[#2D3748]" /> },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    code: "NATIVE",
    accentColor: "#FFD93D",
    icon: <FaMobileAlt />,
    span: "col-span-12 sm:col-span-6 lg:col-span-4",
    skills: [
      { name: "React Native", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Expo", icon: <SiExpo className="text-black" /> },
    ],
  },
  {
    id: "tools",
    title: "Tools & Development",
    code: "DEV WORKFLOW",
    accentColor: "#C4B5FD",
    icon: <FaTools />,
    span: "col-span-12 sm:col-span-6 lg:col-span-4",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-black" /> },
      { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
    ],
  },
  {
    id: "services",
    title: "Services & Integrations",
    code: "CLOUD & SEC",
    accentColor: "#FF6B6B",
    icon: <FaPlug />,
    span: "col-span-12 lg:col-span-4",
    skills: [
      { name: "Cloudinary", icon: <SiCloudinary className="text-[#3448C5]" /> },
      { name: "Google reCAPTCHA", icon: <SiGoogle className="text-[#4285F4]" /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="skills-header">
          <h2 className="title-massive">Arsenal</h2>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="skills-asymmetric-grid grid grid-cols-12 gap-6 mt-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`skill-editorial-card ${cat.span} category-${cat.id}`}
            >
              {/* Card Window Top Header */}
              <div className="skill-card-topbar">
                <div className="flex items-center gap-2">
                  <div className="window-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="cat-title-text flex items-center gap-2">
                    {cat.icon} {cat.title}
                  </span>
                </div>
                <span className="cat-code-tag">{cat.code}</span>
              </div>

              {/* Card Inner Badges Matrix */}
              <div className="skill-card-body">
                {cat.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`editorial-skill-chip ${skill.featured ? 'is-featured' : ''}`}
                  >
                    <span className="chip-icon-wrap">{skill.icon}</span>
                    <span className="chip-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
