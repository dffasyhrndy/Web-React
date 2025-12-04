import React from "react";

export default function ProjectCard({ p, onOpen }) {
  return (
    <article className="project-card" role="article" tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter') onOpen(p); }}>
      <div style={{cursor:'pointer'}} onClick={()=>onOpen(p)}>
        <img src={p.image} alt={p.title} className="project-media" loading="lazy" />
      </div>
      <div className="project-body">
        <h3 className="project-title">{p.title}</h3>
        <p className="project-desc">{p.desc}</p>
        <div style={{marginTop:10}}>
          {(p.tags||[]).map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </article>
  );
}
