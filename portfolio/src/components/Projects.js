import React from 'react';
import Middle from './projects/Middle';
import Fade from 'react-reveal/Fade';

export default function Projects() {
  return (
    <div>
        <section className="sub-section-alternative">
            <Fade bottom>
            <h4>Projects</h4>
            </Fade>
            
            <Middle />

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
    </section>
    </div>
  )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
  ];