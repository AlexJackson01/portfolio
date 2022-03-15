import React from 'react';
import Fade from 'react-reveal/Fade';
import Me from "../me.png";
import Button from '@mui/material/Button';
import '../../src/App.css';



export default function About() {
  return (
    <div className='sub-section'>
        <Fade bottom>
        <div>
            <h4>Welcome</h4>
            <div className='row'>
              <div className='col-lg-4 col-sm-12'>
                <img className="headshot" src={Me} alt="Alex Jackson headshot" />
    </div>
    <div className='col-lg-8 col-sm-12'>
            <p className='about-text'>Hello, I'm Alex and I'm based in London, UK. I am a Full-Stack Developer with over nine years of experience in client relations, project management and automation.</p>
            <p>I’m highly passionate about how advancements in the tech field can be used for good. I’m interested in finding an opportunity that allows me to create impactful products that make a real positive difference to businesses and their customers.</p>
            <p>I pride myself in writing clean, testable code as well as designing and building visually appealing full stack applications with users front of mind, using technologies such as Javascript, React, MySQL, Node/ExpressJS, GraphQL, Firebase/Cloud Firestore and more.</p>
            <p>If you'd like to have a chat about my projects or job opportunities, please drop me an email using the <a className="contact-link" href="#contact">contact form</a> below. I welcome all feedback and messages to further my journey into tech.</p>

            <div className='see-projects'>
          <Button variant="contained" href="#projects" size="large" sx={{fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          Check Out My Projects
          </Button>
      </div>
          </div>

          </div>



            



    </div>
    </Fade>
  </div>
  )
}
