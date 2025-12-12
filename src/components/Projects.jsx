import React from 'react';
import './Projects.css';

// Import all local images
import GraphicsProject1 from '../assets/GraphicsFolder/GraphicsDesign1.jpg';
import GraphicsProject2 from '../assets/GraphicsFolder/GraphicsDesign2.jpg';
import WebDevProject1 from '../assets/WebDevFolder/WebDev1.jpg';
import WebDevProject2 from '../assets/WebDevFolder/WebDev2.jpg';
import UIUXProject1 from '../assets/UIUXFolder/UIUX1.jpg';
import CyberSecProject1 from '../assets/CyberSecFolder/CyberSec1.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Graphics Design Project 1',
      image: GraphicsProject1,
      category: 'Graphics Design',
      link: '#'
    },
    {
      title: 'Web Dev Project 1',
      image: WebDevProject1,
      category: 'Web Development',
      link: '#'
    },
    {
      title: 'UI/UX Design Project 1',
      image: UIUXProject1,
      category: 'UI/UX Design',
      link: '#'
    },
    {
      title: 'Cybersecurity Project 1',
      image: CyberSecProject1,
      category: 'Cybersecurity',
      link: '#'
    },
    {
      title: 'Graphics Design Project 2',
      image: GraphicsProject2,
      category: 'Graphics Design',
      link: '#'
    },
    {
      title: 'Web Dev Project 2',
      image: WebDevProject2,
      category: 'Web Development',
      link: '#'
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found'; }}
                />
              </a>
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
