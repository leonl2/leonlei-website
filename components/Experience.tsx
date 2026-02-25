const experience = [
  {
    company: "Amazon",
    role: "Software Development Engineer II",
    period: "Jul 2020 — Present",
    location: "Seattle, WA",
    bullets: [
      "Working on customer-facing features and infrastructure for package tracking experiences.",
      "Led cross-functional efforts on reliability, experimentation, and service modernization.",
      "Bar raiser for A/B testing best practices across the org.",
    ],
  },
  {
    company: "Amazon",
    role: "Software Engineer Intern",
    period: "May — Aug 2019",
    location: "Seattle, WA",
    bullets: [
      "Designed and implemented a developer debugging tool for rapid API snapshot access.",
    ],
  },
  {
    company: "Roche (Genentech)",
    role: "Data Science Intern",
    period: "May — Aug 2018",
    location: "New York, NY",
    bullets: [
      "Built an interactive visualization tool for patient journey analysis using R Shiny and D3.js.",
      "Optimized data processing pipelines in R, achieving up to 40x speedup.",
    ],
  },
  {
    company: "University of Miami",
    role: "Research Intern (REU)",
    period: "May — Jul 2017",
    location: "Coral Gables, FL",
    bullets: [
      "Processed and visualized positional and auditory data using C# and MATLAB.",
    ],
  },
];

const education = {
  school: "Brown University",
  degree: "B.S. + M.S. in Computer Science (Concurrent)",
  period: "2016 — 2020",
  note: "GPA 3.81 · Sigma Xi nominee",
};

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-4xl mx-auto">
      <p className="font-mono text-sm text-[var(--accent)] mb-4 tracking-widest uppercase">
        Experience
      </p>
      <h2 className="text-4xl font-bold tracking-tight mb-16">Where I&apos;ve worked</h2>

      <div className="space-y-12">
        {experience.map((job, i) => (
          <div
            key={i}
            className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 border-t border-[var(--border)] pt-8"
          >
            <div>
              <p className="font-mono text-xs text-[var(--muted)] leading-relaxed">
                {job.period}
              </p>
              <p className="font-mono text-xs text-[var(--muted)]">{job.location}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{job.role}</h3>
              <p className="text-[var(--accent)] text-sm font-medium mb-3">{job.company}</p>
              <ul className="space-y-2">
                {job.bullets.map((b, j) => (
                  <li key={j} className="text-[var(--muted)] text-sm leading-relaxed flex gap-2">
                    <span className="text-[var(--accent)] mt-1 shrink-0">·</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Education */}
        <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 border-t border-[var(--border)] pt-8">
          <div>
            <p className="font-mono text-xs text-[var(--muted)]">{education.period}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">{education.school}</h3>
            <p className="text-[var(--accent)] text-sm font-medium mb-1">{education.degree}</p>
            <p className="text-[var(--muted)] text-sm">{education.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
