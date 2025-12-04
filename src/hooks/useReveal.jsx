import { useEffect } from "react";
export default function useReveal(selector = ".reveal", options = { threshold: 0.12 }) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (!els.length) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          obs.unobserve(entry.target);
        }
      });
    }, options);
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [selector, JSON.stringify(options)]);
}
