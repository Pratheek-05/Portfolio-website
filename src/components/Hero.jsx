import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import Section from './Section';

const Hero = () => {
  return (
    <Section id="hero" className="pt-32">
      <div className="flex flex-col items-start max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Pratheek Kachinthaya
        </h1>
        <h2 className="text-2xl md:text-3xl text-[var(--color-ios-blue)] font-medium mb-4">
          Software Developer and Cloud Infrastructure Enthusiast
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
          Building scalable cloud infrastructure and intelligent systems.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Pratheek-05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--color-ios-blue)] text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            <GithubIcon size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pratheek-kachinthaya-014584256"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 glass-card glass-card-hover font-medium"
          >
            <LinkedinIcon size={20} />
            LinkedIn
          </a>
          <a
            href="mailto:pratheekkachinthaya@gmail.com"
            className="flex items-center gap-2 px-6 py-3 glass-card glass-card-hover font-medium"
          >
            <Mail size={20} />
            Email
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
