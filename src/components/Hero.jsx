import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import Section from './Section';

const useTypingEffect = (text, speed = 40) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayed, done };
};

const Hero = () => {
  const { displayed, done } = useTypingEffect(
    'Building scalable cloud infrastructure and intelligent systems.',
    35
  );

  return (
    <Section id="hero" className="pt-32">
      <div className="flex flex-col items-start max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
        >
          Pratheek Kachinthaya
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl md:text-3xl text-[var(--color-ios-blue)] font-medium mb-4"
        >
          Software Developer and Cloud Infrastructure Enthusiast
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl font-light"
        >
          {displayed}
          {!done && <span className="inline-block w-0.5 h-5 bg-[var(--color-ios-blue)] ml-0.5 animate-pulse align-middle" />}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://github.com/Pratheek-05"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--color-ios-blue)] text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            <GithubIcon size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pratheek-kachinthaya-014584256"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
            className="flex items-center gap-2 px-6 py-3 glass-card glass-card-hover font-medium"
          >
            <LinkedinIcon size={20} />
            LinkedIn
          </a>
          <a
            href="mailto:pratheekkachinthaya@gmail.com"
            aria-label="Send email"
            className="flex items-center gap-2 px-6 py-3 glass-card glass-card-hover font-medium"
          >
            <Mail size={20} />
            Email
          </a>
          <a
            href="/resume.pdf"
            download="Pratheek_Kachinthaya_Resume.pdf"
            aria-label="Download resume as PDF"
            className="flex items-center gap-2 px-6 py-3 glass-card glass-card-hover font-medium text-white border-[var(--color-ios-blue)]/30 hover:border-[var(--color-ios-blue)] hover:bg-[var(--color-ios-blue)]/10"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
