import React, { useState } from "react";
import useTheme from "../hooks/useTheme";
import useLanguage from "../hooks/useLanguage";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar(){
  const { theme, toggle } = useTheme();
  const { lang, toggle: toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="navbar" role="navigation">
      <div className="navbar-inner">
        <a href="#" className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Ran Portfolio</a>

        <nav className="nav-links" aria-label="Sections">
          <a onClick={() => scrollTo('projects')} style={{cursor:'pointer'}}>Projects</a>
          <a onClick={() => scrollTo('contact')} style={{cursor:'pointer'}}>Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="btn lang-btn" onClick={toggleLang} aria-label="Toggle language">{lang === 'en' ? 'ID' : 'EN'}</button>
          <button className="btn theme-btn" onClick={toggle} aria-label="Toggle theme">{theme === 'light' ? '🌙' : '☀️'}</button>

          <button className="menu-btn" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? <FiX size={20}/> : <FiMenu size={20}/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{background: 'var(--card)', borderTop:'1px solid rgba(0,0,0,0.04)'}}>
          <div style={{maxWidth:'var(--container)', margin:'0 auto', padding:'12px 20px', display:'flex', flexDirection:'column', gap:8}}>
            <button className="ghost" onClick={() => { scrollTo('projects'); }}>Projects</button>
            <button className="ghost" onClick={() => { scrollTo('contact'); }}>Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}
