import ProjectProfile from '../components/ProjectProfile.jsx';
import screenshotconsole1 from '../assets/js-lesson-1-console.png';
import screenshotconsole5 from '../assets/js-lesson-5-console.png';
import screenshotconsole7 from '../assets/js-lesson-7-console.png';
import screenshotcode1 from '../assets/js-lesson-1-code.png';
import screenshotcode5 from '../assets/js-lesson-5-code.png';
import screenshotcode7 from '../assets/js-lesson-7-code.png';
import { useState } from "react";

function Portfolio() {
    
    const [showPortfolio, setShowPortfolio] = useState(false);
    
    return <div>
        <p>This is my portfolio</p>
        <button className="portfolio-btn" onClick={() => setShowPortfolio(!showPortfolio)}>Show/Close Portfolio</button>
        {showPortfolio && <div className="div-projects">
            <ProjectProfile title='JS-assignment01' linkRepo='https://github.com/IdaSofieKarlsson/JS-assignment01' isCollaboration={false}
            screenshotconsole={screenshotconsole1} screenshotcode={screenshotcode1}
            techUsed='javascript' description='A very small, but significant first step: the very first project in any langue must be to print/log "Hello, World".'
            projectDoes='Logs Hello World, performs basic arithmetic operations' projectSkills='Intro to js, variables and operators'
            challenges='An easy introduction, the challenge is mostly to not get terrified by js..' />
    
            <ProjectProfile title='JS-assignment05' linkRepo='https://github.com/IdaSofieKarlsson/js-assignment05' isCollaboration={false}
            screenshotconsole={screenshotconsole5} screenshotcode={screenshotcode5}
            techUsed='javascript' description='The introduction to objects in js, a very simple bank app.' projectDoes='The user can display account balance, withdraw money etc., and there is also a log-out function.' 
            projectSkills='Object, variables and functions to objects' challenges='This was difficult, but very satisfying to solve.'/>
    
            <ProjectProfile title='JS-assignment07' linkRepo='https://github.com/IdaSofieKarlsson/Typing-game-master-js-assignment07' isCollaboration={false}
            screenshotconsole={screenshotconsole7} screenshotcode={screenshotcode7}
            techUsed='javascript, HTML' description='The first project on the actual website, a game where you practice to type fast.' projectDoes='By use of the DOM, an interactive website' 
            projectSkills='DOM' challenges='This was very challenging. I will later on expand the project with more features. '/>
        </div>}
        
    </div>;
}

export default Portfolio;
