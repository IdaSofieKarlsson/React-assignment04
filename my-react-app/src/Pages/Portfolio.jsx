//there's some problem with setPopupData, so I have commented out all popup related code. No popup window! 
import React from 'react';
import ProjectProfile from '../components/ProjectProfile.jsx';
import { useState } from "react";
import PopupProject from '../components/PopupProject.jsx';


const  Portfolio = () => {
    
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [search, setSearch] = useState("");
    {/* 
    const [popup, setPopup] = useState(false);*/}
    {/* 
    const [popupData, setPopupData] = ({});*/}

    const projects = [
        {
            title: 'JS-assignment01',
            langues: ['HTML', 'CSS', 'JavaScript'],
            projectSkills: 'Intro to js, variables and operators',
            linkRepo: 'https://github.com/IdaSofieKarlsson/JS-assignment01',
        },
        {
            title: 'JS-assignment05',
            langues: ['HTML', 'CSS', 'JavaScript'],
            projectSkills: 'Object, variables and functions to objects',
            linkRepo: 'https://github.com/IdaSofieKarlsson/js-assignment05',
        },
        {
            title: 'JS-assignment07',
            langues: ['HTML', 'CSS', 'JavaScript'],
            projectSkills: 'DOM',
            linkRepo: 'https://github.com/IdaSofieKarlsson/JS-assignment01',
        },
        {
            title: 'React-assignment02',
            langues: ['HTML', 'CSS', 'JavaScript', 'React'],
            projectSkills: 'Navigation and previewbutton',
            linkRepo: 'https://github.com/IdaSofieKarlsson/React-assignment02',
        },
        {
            title: 'assignment11',
            langues: ['HTML', 'CSS', 'Sass'],
            projectSkills: 'Sass, syntax and using Prepros',
            linkRepo: 'https://github.com/IdaSofieKarlsson/assignment11',
        },
    ];

    const changeShowPortfolio = () => {
        setShowPortfolio(!showPortfolio);
    };
    {/* 
    const showPopup = (index) => {
        setPopup(true);
        setPopupData({
            title: projects[index].title,
            linkRepo: projects[index].linkRepo,
            langues: projects[index].langues
        });
    };*/}
    {/* 
    const closePopup = () => {
        setPopup(false);
    };*/}

    return (<div>
        <p>This is my portfolio</p>
        {/*button toggles show/hide portfolio */}
        <div className="portfolio-btn">
            <button  onClick={changeShowPortfolio}>Show/Close Portfolio</button>
        </div>
        
        <br></br>
        {/*if showPortfolio is true - show search field */}
        {showPortfolio && (
            <div>
                <input 
                type="text"
                placeholder="Search..."
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        )}

        {/*if showPortfolio is true - show projects*/}
        {showPortfolio && (
            <div className="div-projects">
                {projects
                    .filter((project) => 
                        project.langues.some((langues) => langues.toLowerCase().includes(search.toLowerCase())
                    )
                    )
                .map((project, index) => (
                    <ProjectProfile
                        key={index}
                        pTitle={project.title}
                        pLangues={project.langues}
                        pProjectSkills={project.projectSkills}
                        pLinkRepo={project.linkRepo}
                        onClick={() => showPopup(index)}
                    />
                ))}
            </div>
        )}
        {/* */}
        {/*if popup is true - show popup 
        {popup && (
            <PopupProject
                pTitle={popupData.title}
                pLangues={popupData.langues}
                onClick={closePopup}
            />
        )}*/}

    </div>);
};

export default Portfolio;

