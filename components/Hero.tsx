export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
      <div className="animate-fade-up animate-delay-100">
        <p className="font-mono text-sm text-[var(--accent)] mb-4 tracking-widest uppercase">
          hi, i&apos;m
        </p>
      </div>
      <div className="animate-fade-up animate-delay-200">
        <h1 className="text-6xl sm:text-8xl font-bold tracking-tight leading-none mb-6">
          Leon Lei
        </h1>
      </div>
      <div className="animate-fade-up animate-delay-300">
        <p className="text-xl sm:text-2xl text-[var(--muted)] max-w-xl leading-relaxed mb-10">
          Software engineer at{" "}
          <span className="text-[var(--foreground)] font-medium">Amazon</span>,
          Brown CS alum, and maker of things I find interesting.
        </p>
      </div>
      <div className="animate-fade-up animate-delay-400 flex gap-4 flex-wrap">
        <a
          href="#about"
          className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium rounded-full hover:bg-[var(--accent)] transition-colors"
        >
          Learn more
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-[var(--border)] text-sm font-medium rounded-full hover:border-[var(--foreground)] transition-colors"
        >
          Get in touch
        </a>
      </div>

      {/* Subtle scroll indicator */}
      <div className="animate-fade-up animate-delay-600 absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[var(--muted)] mx-auto" />
      </div>
    </section>
  );
}
