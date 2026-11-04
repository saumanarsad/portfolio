"use client";

import { useEffect, useState } from "react";
import { SmoothLink } from "@/components/smooth-link";

const SECTIONS = ["projects", "experience", "skills"] as const;
type SectionId = (typeof SECTIONS)[number];

export function SectionNav() {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const visible = new Set<string>();
    let atBottom = false;

    const update = () =>
      setActive(
        atBottom
          ? SECTIONS[SECTIONS.length - 1]
          : ([...SECTIONS].reverse().find((id) => visible.has(id)) ?? null),
      );

    // A section is "in view" once it crosses a band just below the sticky nav
    const sections = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        update();
      },
      { rootMargin: "-64px 0px -55% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sections.observe(el);
    });

    // The last section may be too short to reach the band; the footer coming
    // into view means we're at the end of the page.
    const end = new IntersectionObserver(([e]) => {
      atBottom = e.isIntersecting;
      update();
    });
    const footer = document.querySelector("footer");
    if (footer) end.observe(footer);

    return () => {
      sections.disconnect();
      end.disconnect();
    };
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-20 border-b border-neutral-800/80 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <SmoothLink href="#top" className="font-semibold text-neutral-100">
          Sauman Arshad
        </SmoothLink>
        <ul className="flex gap-4 font-mono text-xs sm:gap-6 sm:text-sm">
          {SECTIONS.map((id) => (
            <li key={id}>
              <SmoothLink
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={
                  active === id
                    ? "text-emerald-400"
                    : "text-neutral-400 transition-colors hover:text-neutral-100"
                }
              >
                {id}
              </SmoothLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
