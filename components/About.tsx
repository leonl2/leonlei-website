const skills = {
  Proficient: ["Java", "Python", "TypeScript", "React", "Node.js", "MongoDB", "MySQL"],
  Familiar: ["C", "C++", "C#", "Tailwind", "Vue.js", "PostgreSQL", "DynamoDB"],
};

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="font-mono text-sm text-[var(--accent)] mb-4 tracking-widest uppercase">
            About
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            A bit about me
          </h2>
          <div className="space-y-4 text-[var(--muted)] leading-relaxed">
            <p>
              I&apos;m a software engineer with a B.S. + M.S. in Computer Science
              from Brown University, where I also taught AI and Web Development
              as Head TA.
            </p>
            <p>
              I care about building things that are well-crafted — whether
              that&apos;s production software, research, or a weekend side project.
              My interests span machine learning, computer graphics, and
              full-stack engineering.
            </p>
            <p>
              Outside of work, I&apos;ve contributed to early-stage product work,
              published research in 3D geometry, and enjoy making games in my spare time.
            </p>
          </div>
        </div>

        <div>
          <p className="font-mono text-sm text-[var(--accent)] mb-4 tracking-widest uppercase">
            Skills
          </p>
          <div className="space-y-6">
            {Object.entries(skills).map(([level, items]) => (
              <div key={level}>
                <p className="text-xs font-mono text-[var(--muted)] mb-3 uppercase tracking-wider">
                  {level}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm border border-[var(--border)] rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
