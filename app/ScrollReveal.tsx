"use client";

import { useEffect } from "react";

const TARGETS = [
  ".section-head",
  ".object-row",
  ".best-fit-panel",
  ".orbit-era",
  ".orbit-note",
  ".how-step",
  ".how-note",
  ".ledger-row",
  ".company-panel",
  ".arc-row",
  ".video-home-card",
  ".format-visual",
  ".format > div:last-child",
  ".about-portrait",
  ".about-copy",
];

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const elements = document.querySelectorAll<HTMLElement>(TARGETS.join(", "));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    elements.forEach((el, index) => {
      el.classList.add("will-reveal");
      el.style.transitionDelay = `${(index % 4) * 55}ms`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
