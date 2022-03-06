import React from 'react';
import Fade from 'react-reveal/Fade';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Javascript, Hub, Css, Brush, Route, ThumbUp, SetMeal, VpnKey, Security, LocalPostOffice, Quiz,
TableView, TextFields, FormatShapes, ColorLens, Biotech} from '@mui/icons-material';
import Logo from "../codify/codify-logo.png";
import Figma_1 from "../codify/figma1.png";
import Figma_2 from "../codify/figma2.png";
import Figma_3 from "../codify/figma3.png";
import Figma_4 from "../codify/figma4.png";
import Home from "../codify/codify-home.png";
import Whiteboard from "../codify/whiteboard.png";
import Resources from "../codify/resources.png";


function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }


export default function Codify() {
  return (
    <div>
        <section>
            <Fade bottom>
                <div className='projects row'>
                <div className='col-6'>
                <h2>Codify</h2>
                <h6>Full Stack</h6>
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

<p className='project-description'>Codify is a collaborative full stack project created with two of my fellow bootcamp students. No matter your background, learning to program requires discipline and dedication, along with the ability to evaluate your own errors, learn from your mistakes, and sift through massive amounts of information in order to find code solutions that work for your needs. We designed Codify with our own experience as bootcamp students in mind, hoping to provide tools to facilitate some of the practical, organisational needs of programmers, as well as to provide spaces that encourage active learning.</p>
<p className='project-description'>For this project, I designed a name and logo that reflected the initial idea - a learning app for coding where work and resources can be codified. I also designed and built a simple landing page and an interactive whiteboard that can be used to visualise programming concepts, take, and save notes. People learn in different ways and for students new to coding, it may be difficult to really understand how something works by reviewing lines of code or written notes. The whiteboard feature is a way for students to visualise bootcamp material during and after class lectures to make more sense of complex coding concepts.</p>
            <p className='project-buttons'><Button variant="contained" href="#" size="large" sx={{fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          See the live app
          </Button></p>
          <p><Button variant="contained" href="#" size="large" sx={{fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          See on Github
          </Button></p>
            </div>
        <div className='col-6'>
        <ImageList
                // sx={{ width: "100%" }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar
            title={item.title}
            subtitle={item.author}
          />
                </ImageListItem>
            ))}
            </ImageList>
            </div>
            </div>
      </Fade>
    </section>
    </div>
  )
}

const itemData = [
    {
      img: Logo,
      title: 'Codify Logo',
      rows: 2,
      cols: 2,
    },
    {
      img: Figma_1,
      title: 'Figma Design 1',
      cols: 1
    },
    {
      img: Figma_2,
      title: 'Figma Design 2',
      cols: 1
    },
    {
      img: Figma_3,
      title: 'Figma Design 3',
      cols: 1
    },
    {
      img: Figma_4,
      title: 'Figma Design 4',
      cols: 1
    },
    {
      img: Home,
      title: 'Landing Page',
      rows: 2,
      cols: 4,
    },
    {
      img: Whiteboard,
      title: 'Whiteboard Tool',
      rows: 2,
      cols: 2,
    },
    {
      img: Resources,
      title: 'Styled Resources Page',
      rows: 2,
      cols: 2,
    },
  ];