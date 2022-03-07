import React from 'react';
import Fade from 'react-reveal/Fade';
import ImageList from '@mui/material/ImageList';
import Carousel from 'react-material-ui-carousel'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Javascript, Hub, Css, Brush, Route, ThumbUp, SetMeal, VpnKey, Security, LocalPostOffice, Quiz,
TableView, TextFields, FormatShapes, ColorLens, Biotech, ArrowForward, ArrowBack} from '@mui/icons-material';
import Logo from "../mighty-fierce-birth/MFB-logo.png";
import About from "../mighty-fierce-birth/MFB-about.png";
import Figma_1 from "../mighty-fierce-birth/figma1.png";
import Figma_2 from "../mighty-fierce-birth/figma2.png";
import Figma_3 from "../mighty-fierce-birth/figma3.png";
import Home from "../codify/codify-home.png";
import Home2 from "../codify/codify-home2.png";
import Whiteboard from "../codify/whiteboard.png";
import Whiteboard2 from "../codify/whiteboard2.png";
import Resources from "../codify/resources.png";

const items = [
  {
      name: "Mighty Fierce Birth Logo",
      Image: Logo,
  },
  // {
  //     name: "Landing Page",
  //     Image: Home
  // },
  // {
  //   name: "Landing Page",
  //   Image: Home2
  // },
  // {
  //   name: "Whiteboard",
  //   Image: Whiteboard
  // },
  // {
  //   name: "Whiteboard",
  //   Image: Whiteboard2
  // },
  // {
  //   name: "Resources",
  //   Image: Resources
  // },
  {
    name: "Figma Design",
    Image: Figma_1  
  },
  {
    name: "Figma Design",
    Image: Figma_2  
  },
  {
    name: "Figma Design",
    Image: Figma_3 
  },
]

const Item = ({ item }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div>
      <img className="project-image" src={item.Image} />
      </div>
      <div>
      </div>
      </div>
  );
}


export default function Codify() {
  return (
    <div>
        <section>
            <Fade bottom>
                <div className='projects row'>
                <div className='col-6'>
                <h2>Mighty Fierce Birth</h2>
                <h6>Front End</h6>
            <div className='tech-stack'>
            <Stack direction="row" spacing={1} sx={{color: "white", display: "block", margin: "0", }}>
            <Chip icon={<Javascript style={{color: "white"}}/>} label="Javascript" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
            <Chip icon={<Hub style={{color: "white"}}/>} label="React" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<Css style={{color: "white"}}/>} label="CSS/Bootstrap" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<Brush style={{color: "white"}}/>} label="Figma & Canva" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<Brush style={{color: "white"}}/>} label="Material UI" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<Javascript style={{color: "white"}}/>} label="Node/ExpressJS" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
            <Chip icon={<SetMeal style={{color: "white"}}/>} label="MySQL" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
            <Chip icon={<VpnKey style={{color: "white"}}/>} label="JSON Web Tokens" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
            <Chip icon={<Security style={{color: "white"}}/>} label="BCrypt" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
            <Chip icon={<Route style={{color: "white"}}/>} label="React Router" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<ThumbUp style={{color: "white"}}/>} label="Flaticon/React-icons" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            </Stack>
            
</div>

<p className='project-description'>Mighty Fierce Birth is the hypnobirthing company of Prosha Sharif which specialises in supporting others during their pregnancies to prepare for positive births. I built their first company website which was designed using Prosha's branding and written content.</p>
<p className='project-description'>From the Figma design stage to implemention, I was in regular contact with Prosha to ensure she was happy with how things looked. I ensured we had an open relationship from the start so the website would encapsulate everything she wanted her new business to be. or this project, I designed a name and logo that reflected the initial idea - a learning app for coding where work and resources can be codified. I also designed and built a simple landing page and an interactive whiteboard that can be used to visualise programming concepts, take, and save notes. People learn in different ways and for students new to coding, it may be difficult to really understand how something works by reviewing lines of code or written notes. The whiteboard feature is a way for students to visualise bootcamp material during and after class lectures to make more sense of complex coding concepts.</p>
<p className='project-buttons'><Button variant="contained" href="https://meet-in-the-middle.netlify.app" size="large" sx={{marginRight: "10px", fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          See the live app
          </Button>
          <Button variant="contained" href="https://github.com/AlexJackson01/meet-in-the-middle" size="large" sx={{fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          See on Github
          </Button></p>
            </div>
        <div className='col-6'>


        <Carousel autoPlay className='project-carousel' indicators={true} NextIcon={<ArrowForward />}  PrevIcon={<ArrowBack/>} navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
            backgroundColor: '#e3997c',
            color: "black",
            opacity: 100
            // borderRadius: 0
        }
    }} 

        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
            </div>
            </div>
      </Fade>
    </section>
    </div>
  )
}