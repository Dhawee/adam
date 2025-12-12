import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Graphics Design', description: 'Creating visually appealing designs for print and digital media.' },
    { name: 'Web Development', description: 'Building responsive and dynamic websites using modern technologies.' },
    { name: 'UI/UX Design', description: 'Designing intuitive user interfaces and enhancing user experiences.' },
    { name: 'Cybersecurity', description: 'Ensuring security and protecting systems from threats.' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;