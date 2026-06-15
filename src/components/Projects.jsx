import React from 'react';
import Section from './Section';

const projects = [
  {
    title: "LoanSight AI",
    stack: "Python, FastAPI, Docker, Terraform, AWS, GitHub Actions, Streamlit",
    description: "Production-grade MLOps platform built on a loan approval prediction model. Features FastAPI backend, Docker containerization, Terraform IaC (ECS Fargate, ECR, CloudWatch), concept drift detection, GitHub Actions CI/CD pipeline, and Streamlit UI hosted on Hugging Face Spaces. Deployed live on AWS.",
    tags: ["AWS", "ECS Fargate", "Terraform", "Docker", "FastAPI", "MLOps", "GitHub Actions"]
  },
  {
    title: "SmartMeetAI",
    stack: "Python, FastAPI, React, MongoDB",
    description: "Intelligent meeting assistant with a multi-agent AI pipeline combining real-time transcription, summarisation, and automated email dispatch — cutting post-meeting follow-up from ~30 minutes to under 2 minutes. Integrates Google OAuth2, Calendar API, and a Chrome extension live caption feed.",
    tags: ["FastAPI", "React", "MongoDB", "Google OAuth2", "Multi-agent AI"]
  },
  {
    title: "LearnAbleAI",
    stack: "React, TypeScript, Gemini API",
    description: "AI assistant for neurodiverse learners (Dyslexia, ADHD, Autism) with accessible dark-mode SPA, Google Gemini API integration, prompt-engineered learning modes, and Text-to-Speech. Improved content accuracy by 30%, boosted performance by 25%.",
    tags: ["React", "TypeScript", "Gemini API", "Accessibility", "Prompt Engineering"]
  },
  {
    title: "Insight-Engine",
    stack: "React, Vite, TailwindCSS, APIs",
    description: "Real-time content analytics dashboard aggregating multi-source API data into actionable performance trend views. Modular component architecture reduced feature integration effort by ~40%.",
    tags: ["React", "Vite", "TailwindCSS", "REST APIs", "Data Visualization"]
  },
  {
    title: "DRL Concept Drift Detection",
    stack: "Python, DQN, Streamlit, Docker, GitHub Actions",
    description: "Deep Reinforcement Learning system for concept drift detection on streaming data. DQN agent with a multiscale hybrid drift detector, real-time Streamlit dashboard, and full CI/CD pipeline via GitHub Actions, Docker, and Render.",
    tags: ["Python", "DQN", "Reinforcement Learning", "Streamlit", "Docker", "CI/CD"]
  },
  {
    title: "Loan Approval Prediction",
    stack: "Python, scikit-learn, XGBoost, SHAP",
    description: "Explainable AI-driven loan approval prediction system using Logistic Regression, Random Forest, XGBoost, and a Voting Ensemble. Features SHAP explainability, SMOTE class balancing, and comprehensive model evaluation.",
    tags: ["Python", "XGBoost", "SHAP", "SMOTE", "scikit-learn", "Explainable AI"]
  }
];

const Projects = () => {
  return (
    <Section id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="glass-card glass-card-hover p-8 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 font-mono mb-4">{project.stack}</p>
            <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-[var(--color-ios-blue)]/10 text-[var(--color-ios-blue)] text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
