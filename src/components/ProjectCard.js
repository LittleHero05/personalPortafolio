import React from 'react';
import './projectCard.css';
import cityImage from '../assets/city.png';
import beach from '../assets/beach-1.png';
import room from '../assets/roomcycles.png';
import castle from '../assets/castle.mp4';
import rubik from '../assets/rubiks.mp4';
import sheep from '../assets/sheep.png';

function ProjectCard(props) {
    return (
        <div className='project-card'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.technologies}</p>
            {props.links && props.links.length > 0 && (
                <div className='project-links'>
                    {props.links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className='project-link'>
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

function ModelingCard() {
    return (
        <div className='project-card'>
            <h3>3D Modeling and Animation</h3>
            <p>Create 3D models and animations using Blender.</p>
            <p>Blender and Davinci Resolve</p>
            <div className='gallery'>
            <video controls>
                    <source src={castle} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                <img src={sheep} alt="3D Model 4" />
                <img src={room} alt="3D Model 3" />

                <img src={beach} alt="3D Model 2" />
                <img src={cityImage} alt="3D Model 1" />
                <video controls>
                    <source src={rubik} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default ProjectCard;
export { ModelingCard };