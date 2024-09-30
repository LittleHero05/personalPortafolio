import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

/**
 * File: App.js
 * Author: Isabella Porras
 * Date: September 2024
 * Student ID: 301345524
 * 
 */

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <div className="main-container">
          <div className="header-container">
            <img src="/orchid.png" alt="Orchid Icon" className="orchid-icon" />
            <h1 className="heading">Isabella Porras</h1>
          </div>
          <div className="main-content">
            <div className="about-me">
              <p>
                Hi, I'm Isabella Porras, a 2nd year Software Engineer student with a passion for data science and logic driven problem solving.
                My time at Centennial College and my independent pursuit of courses such as The Odin Project,
                has given me a solid foundation in software development, using the MERN stack and in areas such as data analysis.
                I enjoy working with data and creating visualizations and analysis, using Python and its libraries.
              </p>
            </div>
          </div>
        <div className="resume-button-container">
        <a href="/Resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">View My Resume</a>
      </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;