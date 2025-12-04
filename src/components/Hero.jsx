import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import useLanguage from "../hooks/useLanguage";

export default function Hero(){
  const { t } = useLanguage();
  return (
    <section className="hero container reveal" aria-labelledby="hero-title">
      <motion.img src={profile} alt="Ran profile" className="profile" initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.7}} />
      <motion.h1 className="title" id="hero-title" initial={{y:12,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:.15}}> {t('hero_title')} </motion.h1>
      <motion.p className="lead" initial={{y:12,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:.25}}> {t('hero_sub')} </motion.p>

      <div className="actions">
        <a className="btn primary" href="#projects">{t('see_work')}</a>
        <a className="btn ghost" href="#contact">Contact</a>
      </div>
    </section>
  );
}
