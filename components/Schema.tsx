export default function Schema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alkama Sunasara",
          url: "https://alkamasunasara.vercel.app",
          jobTitle: "Full Stack Developer",
          sameAs: [
            "https://www.linkedin.com/in/alkama-sunasara-b682a3316/",
            "https://github.com/yourusername",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Freelance",
          },
          knowsAbout: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JavaScript",
            "Frontend Development",
            "Backend Development",
            "UI/UX",
          ],
        }),
      }}
    />
  );
}
