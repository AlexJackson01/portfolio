import React from 'react';
import Fade from 'react-reveal/Fade';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Javascript, Hub, Css, GpsFixed, Brush, Room, Route, ThumbUp, 
  LocalFireDepartment, Email, ArrowForward, ArrowBack} from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel'
import Logo from "../middle/Meet-logo.png";
import Landing from "../middle/meet-landing.png";   
import Figma_1 from "../middle/Figma1.png";
import Figma_2 from "../middle/Figma2.png";
import HomePage from "../middle/meet-home.png";
import LoginPage from "../middle/meet-login.png";
import SearchPage from "../middle/meet-search.png";


const items = [
        {
            name: "Meet in the Middle Logo",
            Image: Logo,
        },
        {
            name: "Landing Page",
            Image: Landing
        },
        {
          name: "Login Page",
          Image: LoginPage
        },
        {
          name: "Home Page",
          Image: HomePage
        },
        {
          name: "Search Page",
          Image: SearchPage
        },
        {
          name: "Figma Design",
          Image: Figma_1
        },
        {
          name: "Figma Design",
          Image: Figma_2
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


export default function Middle() {
  return (
    <div>
        <section>
            <Fade bottom>
                <div className='projects row'>
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
            <p className='project-buttons'><Button variant="contained" href="https://meet-in-the-middle.netlify.app" size="large" sx={{marginRight: "10px", fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          See the live app
          </Button>
          <Button variant="contained" href="https://github.com/AlexJackson01/meet-in-the-middle" size="large" sx={{fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
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