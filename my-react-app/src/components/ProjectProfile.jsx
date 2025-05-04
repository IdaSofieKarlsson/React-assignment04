import { useState } from 'react';
import '../components/ProjectProfile.css';
import PopupProject from '../components/PopupProject.jsx';

function ProjectProfile(props) {
    
    const [popupInfo, setPopupInfo] = useState({
    title: 'a',
    linkRepo: 'b',
    langues: 'c',
    projectDoes: 'd',
    projectSkills: 'e',
    });
    
    const [isOpen, setIsOpen] = useState(false);

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <div className='project'>
            <h3>Project name: </h3>
            <button onClick={() => setIsOpen(true)}>Show technical details</button>
            <h1 className='project-title'>{props.title}</h1>
            <img className='img' src={props.screenshotconsole} alt="screenshot console" />
            <img className='img' src={props.screenshotcode} alt="screenshoot code" />
            <a href={props.linkRepo} target='_blank'>Github repo</a>
            <h3 className='h3-title'>Tech used: {props.techUsed}</h3>
            <p className='p-description'>{props.description}</p>
            <ul>
                <li>{props.projectDoes}</li>
                <li>{props.projectSkills}</li>
                <li>{props.isCollaboration ? "This was a collaboration" : "This was not a collaboration"}</li>
                <li>{props.challenges}</li>
            </ul>
            {isOpen && <PopupProject title={popupInfo.title} linkRepo={popupInfo.linkRepo} langues={popupInfo.langues} 
            projectDoes={popupInfo.projectDoes} projectSkills={popupInfo.projectSkills}
            onClick={closePopup}/>}
        </div>
    )
};

export default ProjectProfile;
