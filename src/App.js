import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="header-container">
        <img src="/orchid.png" alt="Orchid Icon" className="orchid-icon" />
        <h1 class="heading">Isabella Porras</h1>
      </div>
      <div className="main-content">
        <div className="about-me">
          <p>
            Hi, I'm Isabella Porras, a 2nd year Software Engineer student with a passion for data science and logic driven problem solving.
            My time at Centennial College and my independent persue of courses such as The Odin Project,
            has given me a solid foundation in software development, using the MERN stack and in areas such as data analysis.
            I enjoy working with data and creating visualzations and analysis, using Python and its libraries
             such as pandas, plotly, maplotlib, and softwares such as Tableau. 
            Check out my work on <a href="https://github.com/LittleHero05" target="_blank" rel="noopener noreferrer">GitHub</a> and connect with me on 
            <a href="www.linkedin.com/in/isabella-porras-134b2a295" target="_blank" rel="noopener noreferrer"> LinkedIn</a>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;