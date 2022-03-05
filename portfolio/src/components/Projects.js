import React from 'react';
import Fade from 'react-reveal/Fade';


export default function Projects() {
  return (
    <div>
        <section className="sub-section-alternative">
            <Fade bottom>
            <h4>Projects</h4>
            <div className="project-container">
            <div className="project-card">
          <img className="project-image" src="images/RikRok.png" alt="Project 1" />
          <h3>TikTok Clone</h3>
          <p className="subtext">This is my project...</p>
          <hr />
          <p className="subtext">
            <a
              className="project-link"
              href="https://naughty-cray-2e5fd3.netlify.app/#/"
              >View here</a>
          </p>
        </div>
        <div className="project-card">
          <img className="project-image" src="images/BB.png" alt="Project 2" />
          <h3>Beaut Bakes Website</h3>
          <p className="subtext">This is my project...</p>
          <hr />
          <p className="subtext"><a className="project-link" href="https://www.beautbakes.co.uk">View here</a>
          </p>
        </div>
        <div className="project-card">
          <img className="project-image" src="images/Hangman.png" alt="Project 3" />
          <h3>Hangman Game</h3>
          <p className="subtext">This is my project...</p>
          <hr />
          <p className="subtext">View here</p>
        </div>
        <div className="project-card">
          <img className="project-image" src="images/petflix.png" alt="Project 4" />
          <h3>Netflix Clone</h3>
          <p className="subtext">This is my project...</p>
          <hr />
          <p className="subtext"><a className="project-link" href="https://romantic-ramanujan-0b1635.netlify.app/#/">View here</a></p>
        </div>
      </div>
      </Fade>
    </section>
    </div>
  )
}
