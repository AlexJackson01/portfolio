import React from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-material-ui-carousel'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Javascript, Hub, Css, Brush, Route, ThumbUp, SetMeal, VpnKey, Security, LocalPostOffice, Quiz,
TableView, TextFields, FormatShapes, ColorLens, Biotech, ArrowForward, ArrowBack} from '@mui/icons-material';
import Logo from "../codify/codify-logo.png";
import Figma_1 from "../codify/figma1.png";
import Figma_2 from "../codify/figma2.png";
import Home from "../codify/codify-home.png";
import Home2 from "../codify/codify-home2.png";
import Whiteboard from "../codify/whiteboard.png";
import Whiteboard2 from "../codify/whiteboard2.png";
import Resources from "../codify/resources.png";

const items = [
  {
      name: "Meet in the Middle Logo",
      Image: Logo,
  },
  {
    name: "Landing Page",
    Image: Home2
  },
  {
    name: "Whiteboard",
    Image: Whiteboard2
  },
  {
    name: "Resources",
    Image: Resources
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
                <div className='project-carousels row'>
                <div className='col-6'>
                <h2>Codify</h2>
            <div className='tech-stack'>
              <Stack direction="row" spacing={1} sx={{color: "white", display: "block", margin: "0", }}>
              <Chip icon={<Javascript style={{color: "white"}}/>} label="Javascript" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<Hub style={{color: "white"}}/>} label="React" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              <Chip icon={<Css style={{color: "white"}}/>} label="CSS/Bootstrap" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              <Chip icon={<Brush style={{color: "white"}}/>} label="Figma & Canva" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              <Chip icon={<Brush style={{color: "white"}}/>} label="Chakra UI" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              <Chip icon={<Javascript style={{color: "white"}}/>} label="Node/ExpressJS" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<SetMeal style={{color: "white"}}/>} label="MySQL" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<VpnKey style={{color: "white"}}/>} label="JSON Web Tokens" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<Security style={{color: "white"}}/>} label="BCrypt" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<LocalPostOffice style={{color: "white"}}/>} label="Postman" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<Quiz style={{color: "white"}}/>} label="QuizAPI" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<TableView style={{color: "white"}}/>} label="DrawSQL" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<TextFields style={{color: "white"}}/>} label="Draft-JS/DOM-Purify/html-react-parser" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<Brush style={{color: "white"}}/>} label="HTML5 Canvas" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<FormatShapes style={{color: "white"}}/>} label="RoughJS/Perfect Freehand" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<ColorLens style={{color: "white"}}/>} label="React Color" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<Route style={{color: "white"}}/>} label="React Router" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              <Chip icon={<ThumbUp style={{color: "white"}}/>} label="Flaticon/React-icons" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              <Chip icon={<Biotech style={{color: "white"}}/>} label="Jest/Enzyme" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              </Stack>

</div>
<p className='project-description'>
  Codify is a collaborative Full Stack app that provides educational tools to coding bootcamp students in order to facilitate their practical and active learning. I implemented features such as:</p>
  <p className='project-description'>
    <ul>
      <li>An interactive whiteboard for desktop that allows users to create their own visual notes and notes and diagrams for more effective learning and learning and understanding of complex coding concepts. Built tools such as freehand/shape drawing, selecting and resizing elements, local image uploads, draggable sticky notes and a download function.</li>
      <li>A logo, app name and mobile responsive landing page with images and animated taglines that deliver a clear message on the app's purpose.</li>
    </ul>
</p>

<p className='project-buttons'><Button variant="contained" href="http://codify-ais.herokuapp.com" size="large" sx={{marginRight: "10px", fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          See the live app
          </Button>
          <Button variant="contained" href="https://github.com/AlexJackson01/codify" size="large" sx={{fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
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