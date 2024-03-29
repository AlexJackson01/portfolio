import React from "react";
import Middle from "./projects/middle/Middle";
import Codify from "./projects/codify/Codify";
import Reliked from "./projects/reliked/Reliked";
import MFBLogo from "./projects/mighty-fierce-birth/MFB-logo2.png";
import Mood from "./projects/moodtrack/moodtrack-logo.png";
import Fade from "react-reveal/Fade";

export default function Projects() {
  return (
    <div className="sub-section-alternative">
      <Fade bottom>
        <h4>Projects</h4>
      </Fade>

      <Middle />
      <Codify />
      <Reliked />
      {/* <MFB /> */}
      {/* <Wordle /> */}

      <h5>Currently in development...</h5>
      <br />
      <div className="project-container">
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <div className="project-card">
              <img className="project-image-dev" src={Mood} alt="MFB Logo" />
              <h3>MoodTrack</h3>
              <p className="subtext">
                Full Stack mobile application that promotes daily wellbeing
                check-ins and facilitates the use of music as a positive outlet
                for people's mental health.
              </p>
              <hr />
            </div>
          </div>
          <div className="col-lg-6 col-xs-12">
            <div className="project-card">
              <img className="project-image-dev" src={MFBLogo} alt="MFB Logo" />
              <h3>Mighty Fierce Birth</h3>
              <p className="subtext">
                Front end website for Mighty Fierce Birth, a hypnobirthing
                business that specialises in supporting others during their
                pregnancies to prepare for positive birth experiences.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
