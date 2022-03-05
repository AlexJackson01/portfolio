import React from 'react';
import Fade from 'react-reveal/Fade';
import Me from "../me.png";

export default function About() {
  return (
    <div className='sub-section'>
        <Fade bottom>
        <div className="information">
            <h4>About Me</h4>
            <p>Hello, my name is Alex Jackson. I am a Front-End Developer....</p>
    </div>
    <div className="headshot-container">
        <img className="headshot" src={Me} alt="Alex Jackson headshot" />
    </div>
    </Fade>
  </div>
  )
}
