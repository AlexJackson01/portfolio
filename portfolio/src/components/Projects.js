import React from 'react';
import Middle from './projects/middle/Middle';
import Codify from './projects/codify/Codify';
import Reliked from './projects/reliked/Reliked';
import MFBLogo from './projects/mighty-fierce-birth/MFB-logo2.png';
import Music from './projects/music/music-logo.png';
import MFB from './projects/mighty-fierce-birth/MFB';
// import Wordle from "./projects/wordle/Wordle";
import Fade from 'react-reveal/Fade';

export default function Projects() {
  return (
    <div>
        <section className="sub-section-alternative">
            <Fade bottom>
            <h4>Projects</h4>
            </Fade>
            
            <Middle />
            <Codify />
            <Reliked />
            {/* <MFB /> */}
            {/* <Wordle /> */}

            <h5>Currently in development...</h5><br /> 
            <div className="project-container">            
            <div className="project-card">
              <img className="project-image-dev" src={MFBLogo} alt="MFB Logo" />
              <h3>Mighty Fierce Birth</h3>
              <p className="subtext">Front end website for Mighty Fierce Birth, a hypnobirthing business that specialises in supporting others during their pregnancies to prepare for positive birth experiences.</p>
              <hr />
        </div>
        <div className="project-card">
              <img className="project-image-dev" src={Music} alt="MFB Logo" />
              <h3>Music & Wellbeing App</h3>
              <p className="subtext">Full Stack mobile application that promotes daily wellbeing check-ins and facilitates the use of music as a positive outlet for people's mental health.</p>
              <hr />
        </div>
        </div>
      </section>
    </div>
  )
}