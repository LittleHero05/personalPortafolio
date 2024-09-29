import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Services.css';

import code from '../assets/code.png';
import dash from '../assets/dash.png';
import data from '../assets/data.png';

const services = [
  {
    title: 'General Programming',
    description: 'Offering solutions in various programming languages. Driven by logical and efficient problem solving.',
    image: code
  },
  {
    title: 'Web Development',
    description: 'Building responsive and modern websites. Using MERN stack and other technologies.',
    image: dash
  },
  {
    title: 'Data Science',
    description: 'Creating data visualizations and machine learning models. Using Python libraries and Tableau',
    image: data
  }
];

const Services = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <div className="services-container">
          <h1 className="services-heading">Services</h1>
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.image} alt={service.title} className="service-image" />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;