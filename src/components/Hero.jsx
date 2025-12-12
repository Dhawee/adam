import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Kareem Adam Olawale</h1>
        <h2>Graphics Designer | Web Developer | UI/UX Designer | Cybersecurity Expert</h2>
        <p>Creating innovative designs and secure solutions to bring ideas to life.</p>
        <div className="hero-details">
          <p><strong>Address:</strong> Victory Estate, Ajah, Lagos 106104, Lagos</p>
          <p><strong>Email:</strong> mztawalexy888@gmail.com</p>
          <p><strong>LinkedIn:</strong> <a href="http://linkedin.com/in/adam-olawale-515945290" target="_blank" rel="noopener noreferrer">adam-olawale-515945290</a></p>
        </div>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;