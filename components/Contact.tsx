const links = [
  {
    label: "Email",
    href: "mailto:leon_lei@alumni.brown.edu",
    value: "leon_lei@alumni.brown.edu",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/leon-lei",
    value: "linkedin.com/in/leon-lei",
  },
  {
    label: "GitHub",
    href: "https://github.com/leonl2",
    value: "github.com/leonl2",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
      <div className="border-t border-[var(--border)] pt-16">
        <p className="font-mono text-sm text-[var(--accent)] mb-4 tracking-widest uppercase">
          Contact
        </p>
        <h2 className="text-4xl font-bold tracking-tight mb-6">Say hello</h2>
        <p className="text-[var(--muted)] max-w-md leading-relaxed mb-12">
          I&apos;m always happy to chat about software, research, side projects, or anything interesting.
          Reach out and I&apos;ll get back to you.
        </p>

        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-4 text-sm hover:text-[var(--accent)] transition-colors"
            >
              <span className="font-mono text-xs text-[var(--muted)] w-16 shrink-0 group-hover:text-[var(--accent)] transition-colors">
                {link.label}
              </span>
              <span className="border-b border-[var(--border)] group-hover:border-[var(--accent)] transition-colors pb-0.5">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-32 pb-8 flex items-center justify-between">
        <p className="font-mono text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Leon Lei
        </p>
        <p className="font-mono text-xs text-[var(--muted)]">
          leonlei.com
        </p>
      </div>
    </section>
  );
}
