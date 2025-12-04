import { useEffect, useState } from "react";

export default function useTheme(initial = "light") {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || initial; } catch { return initial; }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  const toggle = () => setTheme(t => (t === "light" ? "dark" : "light"));
  return { theme, setTheme, toggle };
}
