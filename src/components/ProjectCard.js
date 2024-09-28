import React from 'react';
import './projectCard.css';

function ProjectCard(props) {
    return (
        <div className='project-card'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.technologies}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Link to project</a>
        </div>
    );
}

export default ProjectCard;