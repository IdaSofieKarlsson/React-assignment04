
import '../components/PopupProject.css';
import React from 'react';

const PopupProject = ({title, linkRepo, langues, projectDoes, projectSkills, onClick}) => {
    return (
        <div className='popup-window'>
            <h1 className='title'>{title}</h1>
            <a href={linkRepo} target='_blank'className='github-link'>Github repo</a>
            <p className='info'>{langues}</p>
            <p className='info'>{projectDoes}</p>
            <p className='info'>{projectSkills}</p>
            <button onClick={onClick} className='close-btn'>Close window</button>
        </div>
    );
};

export default PopupProject;
