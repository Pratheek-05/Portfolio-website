import React from 'react';
import Section from './Section';

const experiences = [
  {
    role: "DevOps & Cloud Engineer Intern",
    company: "Sustainext, Bengaluru",
    date: "Mar 2026 – Present",
    bullets: [
      "Containerized and shipped a production Django application end-to-end on AKS — multi-stage Dockerfile, versioned images to ACR, Kubernetes manifests with RBAC, VNet-integrated ingress — compressing environment setup from 3 days to under 4 hours.",
      "Built and rolled out a GitHub Actions CI/CD pipeline benchmarked against Jenkins — reducing release cycle time by 65% and eliminating all manual deployment steps.",
      "Automated Azure infrastructure provisioning using Terraform and Ansible with reusable IaC modules — cutting per-environment setup from 5 hours to under 20 minutes.",
      "Reduced projected AKS compute costs by 35% by modelling workload patterns and recommending HPA, VPA, and KEDA autoscaling configurations.",
      "Authored a technical evaluation of Azure–AWS cross-cloud integration via REST APIs, directly informing the client's multi-cloud architecture decision."
    ]
  },
  {
    role: "AI Agent Integration & Testing Intern",
    company: "IEEE Computer Society (SmartMeetAI)",
    date: "Sep 2025",
    bullets: [
      "Integrated and tested multi-agent AI pipeline across real-time transcription, summarisation, and automated email dispatch.",
      "Resolved cross-service data flow failures across Google OAuth2, Calendar API, and Chrome extension live caption feed."
    ]
  },
  {
    role: "Research Intern",
    company: "Centre for Digital Transformation, NMIT",
    date: "Previous",
    bullets: [
      "Built a Deep Reinforcement Learning approach to concept drift detection on streaming data — DQN agent, multiscale hybrid drift detector, Streamlit dashboard with CI/CD via GitHub Actions, Docker, and Render."
    ]
  }
];

const Experience = () => {
  return (
    <Section id="experience">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="glass-card p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-lg text-[var(--color-ios-blue)] font-medium mt-1">{exp.company}</p>
              </div>
              {exp.date !== "Previous" && (
                <span className="mt-2 md:mt-0 text-gray-400 bg-white/5 px-4 py-1.5 rounded-full text-sm font-medium border border-white/10">
                  {exp.date}
                </span>
              )}
            </div>
            <ul className="space-y-3 text-gray-300 list-disc list-inside marker:text-gray-500">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="leading-relaxed">
                  <span className="-ml-2">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
