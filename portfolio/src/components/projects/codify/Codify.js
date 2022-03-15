import React from 'react';
import Fade from 'react-reveal/Fade';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Javascript, Hub, Css, Brush, Route, ThumbUp, SetMeal, VpnKey, Security, LocalPostOffice, Quiz,
TableView, TextFields, FormatShapes, ColorLens, Biotech} from '@mui/icons-material';
import Logo from "../codify/codify-logo.png";
import Home from "../codify/codify-home.png";
import Home2 from "../codify/codify-home2.png";
import Whiteboard from "../codify/whiteboard.png";
import Whiteboard2 from "../codify/whiteboard2.png";
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
            <h2>Codify</h2>
                <div className='row'>
                <div className='col-lg-6 col-sm-12'>
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
        <div className='col-lg-6 col-sm-12'>
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
        <div className='col-lg-6 col-sm-12'>


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
    title: "Logo",
    rows: 2,
    cols: 2,
  },
  {
    img: Home2,
    title: "Landing Page",
    rows: 2,
    cols: 2,
  },
  {
    img: Whiteboard2,
    title: "Login Page",
    rows: 2,
    cols: 2,
  },
  {
    img: Resources,
    title: "Nearby Search",
    rows: 2,
    cols: 2,
  },
];