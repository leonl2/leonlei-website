const projects = [
  {
    title: "Early-Stage Startup MVP",
    description:
      "Built the initial full-stack MVP for a science-based wellness startup during its early days. The team was later accepted into StartX and secured funding.",
    tags: ["Full-stack", "StartX"],
    link: null,
    note: "Demo available upon request",
  },
  {
    title: "Roominoes",
    description:
      "Research on learning to assemble 3D rooms into floor plans. Published at Symposium on Geometry Processing 2021.",
    tags: ["Research", "3D", "ML", "SGP 2021"],
    link: "https://tinyurl.com/nk7ehxxc",
    note: "Publication",
  },
  {
    title: "ABOT Website",
    description:
      "Website redesign for the ABOT database, built with Node.js and MongoDB, deployed on AWS.",
    tags: ["Node.js", "MongoDB", "AWS"],
    link: "https://abotdatabase.info",
    note: null,
  },
  {
    title: "HoloLens Teleoperation",
    description:
      "ROS-enabled robot teleoperation using the Microsoft HoloLens for mixed-reality control.",
    tags: ["ROS", "C#", "Research", "HoloLens"],
    link: "https://tinyurl.com/3ssbaa5v",
    note: "Research report",
  },
  {
    title: "Senior UI/UX Capstone",
    description:
      "User experience design capstone project completed at Brown University.",
    tags: ["UI/UX", "Design"],
    link: "https://tinyurl.com/36pcke3j",
    note: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-4xl mx-auto">
      <p className="font-mono text-sm text-[var(--accent)] mb-4 tracking-widest uppercase">
        Projects
      </p>
      <h2 className="text-4xl font-bold tracking-tight mb-16">Things I&apos;ve built</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--foreground)] transition-colors flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors ml-2 shrink-0"
                  aria-label={`View ${project.title}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15,3 21,3 21,9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            {project.note && (
              <p className="text-xs font-mono text-[var(--accent)] mb-3">{project.note}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-[var(--border)] rounded-md font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
