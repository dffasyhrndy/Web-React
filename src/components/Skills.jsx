import React from "react";
import useReveal from "../hooks/useReveal";

export default function Skills(){
  useReveal(".skills-section");
  const skills = ['HTML','CSS','JavaScript','React','Vite','Figma'];
  return (
    <section className="section container reveal skills-section" id="skills">
      <div className="card">
        <h3>Skills</h3>
        <div className="skills">
          {skills.map(s => <div key={s} className="skill">{s}</div>)}
        </div>
      </div>
    </section>
  );
}
