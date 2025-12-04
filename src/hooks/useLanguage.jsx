import { useEffect, useState } from "react";

const translations = {
  en: {
    hero_title: "Hi, I'm Ran",
    hero_sub: "Frontend Developer • React Enthusiast",
    projects: "Projects",
    contact: "Contact",
    see_work: "See my work"
  },
  id: {
    hero_title: "Halo, Aku Ran",
    hero_sub: "Frontend Developer • Penggemar React",
    projects: "Projek",
    contact: "Kontak",
    see_work: "Lihat karyaku"
  }
};

export default function useLanguage(initial = "en") {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("lang") || initial; } catch { return initial; }
  });

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const toggle = () => setLang(l => (l === "en" ? "id" : "en"));
  const t = (key) => translations[lang][key] || key;
  return { lang, setLang, toggle, t };
}
