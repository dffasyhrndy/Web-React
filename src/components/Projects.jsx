import React, { useMemo, useState } from "react";
import { projects as all } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import useReveal from "../hooks/useReveal";

export default function Projects(){
  useReveal(".projects-grid");
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("all");
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState(null);

  const tags = useMemo(()=>{
    const s = new Set(all.flatMap(p => p.tags || []));
    return ['all', ...Array.from(s)];
  },[]);

  const filtered = useMemo(()=>{
    return all.filter(p => (tag==='all' || (p.tags||[]).includes(tag)) && p.title.toLowerCase().includes(q.toLowerCase()));
  },[q,tag]);

  const openModal = (p) => { setSel(p); setOpen(true); };
  const closeModal = () => { setOpen(false); setSel(null); };

  return (
    <section id="projects" className="section container">
      <h2 style={{textAlign:'center',fontSize:28,marginBottom:12}}>Projects</h2>

      <div className="controls">
        <input className="search" placeholder="Search projects..." value={q} onChange={e=>setQ(e.target.value)} />
        <div style={{display:'flex',gap:8,flexWrap:'wrap',justifyContent:'center'}}>
          {tags.map(t => <button key={t} onClick={()=>setTag(t)} className={`btn ${t===tag?'primary':''}`} style={{padding:'8px 10px'}}>{t}</button>)}
        </div>
      </div>

      <div className="projects-grid reveal">
        {filtered.map(p => <ProjectCard key={p.id} p={p} onOpen={openModal}/>)}
      </div>

      <ProjectModal open={open} project={sel} onClose={closeModal}/>
    </section>
  );
}
