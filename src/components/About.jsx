import React from 'react';
import Section from './Section';
import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <Section id="about">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
        About Me
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8 leading-relaxed text-gray-300 space-y-4">
          <p>
            Final-year B.E. Information Science & Engineering student at Nitte Meenakshi Institute of Technology, Bengaluru (graduating June 2026).
          </p>
          <p>
            Currently interning as a DevOps & Cloud Engineer at Sustainext, working with Azure, Kubernetes, Terraform, and GitHub Actions.
          </p>
          <p>
            Passionate about building production-grade cloud infrastructure, intelligent systems, and developer tooling that actually ships.
          </p>
        </div>
        
        <div className="glass-card p-8 flex flex-col justify-center">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[var(--color-ios-blue)]/20 text-[var(--color-ios-blue)] rounded-2xl">
              <GraduationCap size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="font-medium">B.E, Information Science and Engineering</p>
              <p className="text-gray-400 mt-1">Nitte Meenakshi Institute of Technology, Bengaluru</p>
              <p className="text-sm text-gray-500 mt-2">Dec 2022 – Jun 2026</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
