import React, { useState } from "react";
import emailjs from "emailjs-com";
import useReveal from "../hooks/useReveal";

export default function Contact(){
  useReveal(".contact-card");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({name:'',email:'',message:''});

  const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

  const handleSubmit = async (e)=>{
    e.preventDefault();
    // Replace these with your EmailJS IDs and create a template
    const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
    const USER_ID = "YOUR_EMAILJS_USER_ID";
    if(SERVICE_ID === "YOUR_EMAILJS_SERVICE_ID"){
      alert("Set EmailJS IDs in Contact.jsx before using. See instructions.");
      return;
    }
    setSending(true);
    try{
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      }, USER_ID);
      setDone(true);
      setForm({name:'',email:'',message:''});
    }catch(err){
      alert("Failed to send. Check console.");
      console.error(err);
    }finally{ setSending(false); }
  };

  return (
    <section id="contact" className="section container">
      <div className="contact-card reveal">
        <h3>Contact</h3>
        <p style={{color:'var(--muted)'}}>Want to work together? Send a message.</p>

        {done ? <p style={{marginTop:12,color:'var(--accent-start)'}}>Thanks — message sent!</p> :
        <form onSubmit={handleSubmit} style={{marginTop:12,display:'grid',gap:10,maxWidth:640,marginLeft:'auto',marginRight:'auto'}}>
          <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required/>
          <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} required/>
          <textarea name="message" placeholder="Message" rows={6} value={form.message} onChange={handleChange} required/>
          <div style={{display:'flex',gap:8,justifyContent:'center'}}>
            <button className="btn primary" type="submit" disabled={sending}>{sending?'Sending...':'Send Message'}</button>
            <button className="btn ghost" type="button" onClick={()=>setForm({name:'',email:'',message:''})}>Reset</button>
          </div>
        </form>}
        <p style={{marginTop:12,color:'var(--muted)'}}>Or email me at <a href="mailto:ran@example.com" style={{color:'var(--accent-start)'}}>ran@example.com</a></p>
      </div>
    </section>
  );
}
