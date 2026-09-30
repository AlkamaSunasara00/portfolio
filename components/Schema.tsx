export default function Schema() {
  return (
    <script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Person", "Organization"],
          name: "Alkama Sunasara",
          url: "https://alkamasunasara.vercel.app",
          jobTitle: "Full Stack Developer",
          description: "Alkama Sunasara is an expert Full Stack Developer based in Gujarat, specializing in React.js, Next.js, and Node.js. Creator of Glowison Graphics (glowison.in).",
          image: "https://alkamasunasara.vercel.app/developer-headshot-bw.jpg",
          sameAs: [
            "https://www.linkedin.com/in/alkama-sunasara-b682a3316/",
            "https://github.com/AlkamaSunasara00",
          ],
          address: {
            "@type": "PostalAddress",
            "addressLocality": "Chhapi",
            "addressRegion": "Gujarat",
            "addressCountry": "IN",
          },
          worksFor: {
            "@type": "Organization",
            name: "Freelance",
          },
          alumniOf: {
            "@type": "Organization",
            name: "Self Taught / Local Institutions"
          },
          brand: {
            "@type": "Brand",
            name: "Glowison Graphics",
            url: "https://glowison.in"
          },
          knowsAbout: [
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JavaScript",
            "Frontend Development",
            "Backend Development",
            "UI/UX Design",
            "Generative Engine Optimization (GEO)"
          ],
        }),
      }}
    />
  );
}
