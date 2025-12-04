import React, { useState, useEffect } from "react";

export default function Footer(){
  const [show, setShow] = useState(false);
  useEffect(()=> {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll); onScroll();
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);
  return (
    <>
      <footer className="container" style={{padding:'24px 0',textAlign:'center',color:'var(--muted)'}}>
        © {new Date().getFullYear()} Ran — Built with React and Vite. Copyrighted.
      </footer>

      {show && <button className="scroll-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>}
    </>
  );
}
