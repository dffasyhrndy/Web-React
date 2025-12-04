import React from "react";
import useReveal from "../hooks/useReveal";

export default function About(){
  useReveal(".about");
  return (
    <section id="about" className="section container reveal about">
      <div className="card">
        <h2>About Me</h2>
        <p style={{color:'var(--muted)'}}>I build clean, accessible web experiences using React. I focus on React, performance, and readable code. I enjoy turning ideas into delightful interfaces.</p>
      </div>
    </section>
  );
}
