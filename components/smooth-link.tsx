"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

export function SmoothLink({
  href,
  className,
  children,
  ...rest
}: {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">) {
  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    e.preventDefault();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Respects the section's scroll-mt-24, so headings land below the sticky nav
    el.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    history.replaceState(null, "", href);
  }

  return (
    <a {...rest} href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
