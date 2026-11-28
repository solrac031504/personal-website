"use client";

import { useEffect, useState } from "react";

const sectionLinks = [
  { href: "#about-me", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
];

export default function SectionNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Expose the open state on <html> so the page layout can make room for the
  // sidebar (and offset scroll targets) with plain CSS.
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.navOpen = String(isOpen);
    return () => {
      delete root.dataset.navOpen;
    };
  }, [isOpen]);

  return (
    <nav
      className={`section-nav${isOpen ? " is-open" : ""}`}
      aria-label="Section navigation"
    >
      <button
        className="section-nav-toggle"
        type="button"
        aria-label={isOpen ? "Close section menu" : "Open section menu"}
        aria-expanded={isOpen}
        aria-controls="section-nav-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <div
        id="section-nav-panel"
        className="section-nav-panel"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <ul>
          {sectionLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}