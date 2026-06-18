import React from 'react';
import Section from './Section';

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "SQL", "C/C++"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["Microsoft Azure (ACR, AKS, Container Apps, Azure Storage)", "AWS", "Docker", "Kubernetes", "Terraform", "Ansible", "CI/CD (GitHub Actions, Jenkins)", "Bash/Shell Scripting"]
  },
  {
    category: "Backend",
    skills: ["FastAPI", "REST APIs", "OAuth2/JWT", "Email Automation", "API Integration"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Relational Databases", "Data Modeling"]
  },
  {
    category: "ML/AI",
    skills: ["pandas", "NumPy", "scikit-learn", "transformers", "XGBoost", "SHAP", "SMOTE", "Streamlit"]
  },
  {
    category: "Tools",
    skills: ["Git/GitHub", "VS Code", "Linux Administration", "Jupyter Notebook"]
  }
];

const Skills = () => {
  return (
    <Section id="skills" fullHeight={false}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((item, index) => (
          <div key={index} className="glass-card glass-card-hover p-6">
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-ios-blue)]">
              {item.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
