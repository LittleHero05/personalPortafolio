// About.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

function About() {
  return (
    <div>
      <Navbar />
      <div class="main-container">
      <div className="about-container">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2022</h3>
              <p>Completed CS50x - Introduction to Computer Science by Hardvard University.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2023 - Present</h3>
              <p>Started my Software Engineering Advanced Diploma at Centennial College.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2024 - Present</h3>
              <p>Completed The Oding Project Foundations course. Actively working on Full Stack Java Script Path.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2024 - Present</h3>
              <p>Actively learning Python for Data Science with Educative IO</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;