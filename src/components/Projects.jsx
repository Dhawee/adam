import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { title: 'Graphics Design Project 1', image: 'https://via.placeholder.com/300x200?text=Graphics+Design+1', category: 'Graphics Design' },
    { title: 'Web Dev Project 1', image: 'https://via.placeholder.com/300x200?text=Web+Dev+1', category: 'Web Development' },
    { title: 'UI/UX Design Project 1', image: 'https://via.placeholder.com/300x200?text=UI+UX+1', category: 'UI/UX Design' },
    { title: 'Cybersecurity Project 1', image: 'https://via.placeholder.com/300x200?text=Cybersecurity+1', category: 'Cybersecurity' },
    { title: 'Graphics Design Project 2', image: 'https://via.placeholder.com/300x200?text=Graphics+Design+2', category: 'Graphics Design' },
    { title: 'Web Dev Project 2', image: 'https://via.placeholder.com/300x200?text=Web+Dev+2', category: 'Web Development' },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;