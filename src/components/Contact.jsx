import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Get in touch for collaborations or inquiries.</p>
        <div className="contact-details">
          <p><strong>Email:</strong> mztawalexy888@gmail.com</p>
          <p><strong>LinkedIn:</strong> <a href="http://linkedin.com/in/adam-olawale-515945290" target="_blank" rel="noopener noreferrer">adam-olawale-515945290</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;