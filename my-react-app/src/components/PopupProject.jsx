
import '../components/PopupProject.css';
import React from 'react';

const PopupProject = ({title, linkRepo, langues}) => {
    return (
        <div className='popup-window'>
            <h1 className='title'>{title}</h1>
            <a href={linkRepo} target='_blank'className='github-link'>Github repo</a>
            <p className='info'>{langues}</p>
        </div>
    );
};

export default PopupProject;
