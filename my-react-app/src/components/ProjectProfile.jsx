import { useState } from 'react';
import '../components/ProjectProfile.css';
import React from 'react';


const ProjectProfile = ({pTitle, pLinkRepo, pLangues, pProjectSkills, onClick}) => {

    const langues = pLangues;

    return (
        <div className='project' onClick={onClick}>
            <h3>Project name: </h3>
            <h1 className='project-title'>{pTitle}</h1>
            <a href={pLinkRepo} target='_blank'>Github repo</a>
            <p className='p-description'>{pProjectSkills}</p>
            <div>
                {langues.map((langues, index) => (
                    <ul key={index} >
                        <li>{langues}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default ProjectProfile;
