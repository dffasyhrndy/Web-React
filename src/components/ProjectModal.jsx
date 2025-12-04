import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectModal({ open, project, onClose }) {
  useEffect(()=>{
    const onKey = (e) => { if(e.key==='Escape') onClose(); };
    if(open) window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  },[open,onClose]);

  if(!open || !project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div className="modal" onClick={(e)=>e.stopPropagation()}
        initial={{scale:0.98,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.98,opacity:0}} transition={{duration:.22}}>
        <button onClick={onClose} style={{float:'right',border:'none',background:'transparent',fontSize:18,cursor:'pointer'}}>✕</button>
        <img src={project.image} alt={project.title} />
        <h3 style={{marginTop:12}}>{project.title}</h3>
        <p style={{color:'var(--muted)'}}>{project.desc}</p>
        <div style={{marginTop:12}}>{(project.tags||[]).map(t => <span key={t} className="tag">{t}</span>)}</div>
        <div style={{marginTop:14}}>
          <a href={project.link} target="_blank" rel="noreferrer" className="btn primary">Open Project</a>
        </div>
      </motion.div>
    </div>
  );
}
