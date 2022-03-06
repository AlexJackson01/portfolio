import React from 'react';
import Fade from 'react-reveal/Fade';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Javascript, Hub, Css, GpsFixed, Brush, Room, Route, ThumbUp, LocalFireDepartment, Email} from '@mui/icons-material';
import Logo from "../middle/Meet-logo.png";
import Desktop from "../middle/meet-desktop.png";   
import Figma_1 from "../middle/Figma1.png";
import Figma_2 from "../middle/Figma2.png";
import LoginPage from "../middle/meet-login.png";
import SearchPage from "../middle/meet-search.png";


function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }


export default function Middle() {
  return (
    <div>
        <section>
            <Fade bottom>
                <div className='projects row'>
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
        <div className='col-6'>
            <h2>Meet in the Middle</h2>
            <h6>Full Stack</h6>
            <div className='tech-stack'>
            <Stack className="tech-icons" direction="row" spacing={1} sx={{color: "white", display: "block", margin: "0"}}>
            <Chip icon={<Javascript style={{color: "white"}}/>} label="Javascript" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
            <Chip icon={<Hub style={{color: "white"}}/>} label="React" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<Css style={{color: "white"}}/>} label="CSS/Bootstrap" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<GpsFixed style={{color: "white"}}/>} label="TomTom API" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<Brush style={{color: "white"}}/>} label="Figma & Canva" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<Room style={{color: "white"}}/>} label="React Leaflet" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<Room style={{color: "white"}}/>} label="Openroute Service API" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<Room style={{color: "white"}}/>} label="Google Maps API" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<Route style={{color: "white"}}/>} label="React Router" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<ThumbUp style={{color: "white"}}/>} label="Font Awesome" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<Hub style={{color: "white"}}/>} label="Axios" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<LocalFireDepartment style={{color: "white"}}/>} label="Firebase" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
            <Chip icon={<LocalFireDepartment style={{color: "white"}}/>} label="Cloud Firestore" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            <Chip icon={<Email style={{color: "white"}}/>} label="EmailJS" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
            </Stack>
            </div>
            <p className='project-description'>If you’re looking to go <b>somewhere new</b>, if you’re meeting someone who <b>lives on the other side of town</b>, if you’re a couple going on a <b>date night</b>, someone organising a <b>first date</b>, colleagues going for a <b>work lunch</b>, friends or family having a <b>catch up</b>, or if you’re just plain <b>indecisive</b> about where to go, why not... <b><em>Meet in the Middle?</em></b></p>
            <p className='project-description'>Meet in the Middle is a full stack app that does what it says on the tin… simply type in two locations, select a place category and radius, and hit Search. The app will calculate the midpoint of the two locations by distance and show you the top-rated places near that midpoint, which you can add to your Favourites and rate. Details of your midpoint and each nearby place will be marked on a map as well as displayed on screen.</p>
            <p className='project-description'>I created this app not only because I always want to try new things and places but now that I live in a different area to my loved ones, it's always helpful to meet at a convenient place in the middle when we reunite. I designed and built the app with the user in mind. I recognised that although there are similar products out there, I hadn't come across a service that made it so user-friendly and visually simple to find a place and save it for later.</p>
            <p className='project-buttons'><Button variant="contained" href="https://meet-in-the-middle.netlify.app" size="large" sx={{fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          See the live app
          </Button></p>
          <p><Button variant="contained" href="https://github.com/AlexJackson01/meet-in-the-middle" size="large" sx={{fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          See on Github
          </Button></p>
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
      title: 'Meet in the Middle Logo',
      rows: 2,
      cols: 2,
    },
    {
      img: Figma_1,
      title: 'Figma Design 1',
      rows: 2,
      cols: 1
    },
    {
      img: Figma_2,
      title: 'Figma Design 2',
      rows: 2,
      cols: 1
    },
    {
      img: Desktop,
      title: 'Landing Page Welcome Video',
      rows: 2,
      cols: 4,
    },
    {
      img: LoginPage,
      title: 'Login Page',
      rows: 2,
      cols: 2,
    },
    {
      img: SearchPage,
      title: 'Nearby Search Page',
      rows: 2,
      cols: 2,
    },
  ];