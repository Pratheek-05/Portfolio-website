import React from 'react';
import Section from './Section';
import { Award, Star } from 'lucide-react';

const certs = [
  "AWS Academy Cloud Architecting (Solutions Architect track)",
  "Google Cloud Computing Foundations Skill Badge — Google Cloud",
  "Machine Learning Fundamentals — Infosys Springboard"
];

const activities = [
  "Core member of CloudZilla Club — organized technical events and workshops",
  "Volunteer — National Service Scheme (NSS)"
];

const Certifications = () => {
  return (
    <Section id="certifications" fullHeight={false}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Certifications & Activities</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6 text-[var(--color-ios-blue)]">
            <Award size={28} />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>
          <ul className="space-y-4">
            {certs.map((cert, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-ios-blue)] shrink-0"></div>
                <span className="leading-relaxed">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6 text-[var(--color-ios-blue)]">
            <Star size={28} />
            <h3 className="text-2xl font-bold text-white">Activities</h3>
          </div>
          <ul className="space-y-4">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-ios-blue)] shrink-0"></div>
                <span className="leading-relaxed">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
