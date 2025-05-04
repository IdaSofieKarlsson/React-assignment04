import { useState } from 'react';
import '../components/ProjectProfile.css';
import React from 'react';


const ProjectProfile = ({title, linkRepo, langues, projectSkills}) => {

    return (
        <div className='project'>
            <h3>Project name: </h3>
            <h1 className='project-title'>{title}</h1>
            <a href={linkRepo} target='_blank'>Github repo</a>
            <h3 className='h3-title'>Tech used: {langues}</h3>
            <p className='p-description'>{projectSkills}</p>
        </div>
    );
};

export default ProjectProfile;
