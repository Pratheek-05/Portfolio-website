import React from 'react';
import Section from './Section';
import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = () => {
  return (
    <Section id="contact" className="pb-12 min-h-0">
      <div className="glass-card p-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-400 mb-10 text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <a href="mailto:pratheekkachinthaya@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <Mail className="text-[var(--color-ios-blue)]" />
            pratheekkachinthaya@gmail.com
          </a>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="text-[var(--color-ios-blue)]" />
            Bengaluru, India
          </div>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="https://github.com/Pratheek-05" target="_blank" rel="noopener noreferrer" className="p-4 glass-card glass-card-hover text-gray-300 hover:text-white">
            <GithubIcon size={24} />
          </a>
          <a href="https://www.linkedin.com/in/pratheek-kachinthaya-014584256" target="_blank" rel="noopener noreferrer" className="p-4 glass-card glass-card-hover text-gray-300 hover:text-white">
            <LinkedinIcon size={24} />
          </a>
        </div>
      </div>
      
      <div className="text-center mt-24 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Pratheek Kachinthaya. Built with React & Tailwind.</p>
      </div>
    </Section>
  );
};

export default Contact;
