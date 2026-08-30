"use client";

import React from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export function Nav() {
  const [active, setActive] = React.useState<string>("hero");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav-panel" aria-label="Primary navigation">
      <a className="nav-brand" href="#hero" aria-label="Galin Mihaylov — home">
        <span>GM</span>
        <strong>Galin Mihaylov</strong>
      </a>

      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={active === section.id ? "active" : undefined}
              aria-current={active === section.id ? "location" : undefined}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        className="nav-cta"
        href="https://www.linkedin.com/in/mihaylov-galin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="linkedin-icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 8.2H3.2V19h3.3V8.2ZM4.85 3A1.92 1.92 0 1 0 4.9 6.84 1.92 1.92 0 0 0 4.85 3ZM19.8 12.8c0-3.25-1.73-4.76-4.04-4.76a3.48 3.48 0 0 0-3.15 1.73V8.2H9.3V19h3.31v-5.35c0-1.41.27-2.78 2.02-2.78 1.72 0 1.74 1.61 1.74 2.87V19h3.31l.12-6.2Z" />
        </svg>
        LinkedIn
        <span className="nav-cta-arrow" aria-hidden="true">↗</span>
      </a>
    </nav>
  );
}
