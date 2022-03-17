import React from 'react';
import Fade from 'react-reveal/Fade';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Javascript, Hub, Css, GpsFixed, Brush, Room, Route, ThumbUp, 
  LocalFireDepartment, Email} from '@mui/icons-material';
import Logo from "../middle/Meet-logo.png";
import Landing from "../middle/meet-landing.png";   
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
            <h2>Meet in the Middle</h2>
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

                </ImageListItem>
            ))}
            </ImageList>


            </div>
        <div className='col-lg-6 col-sm-12'>
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
            <p className="project-description">Meet in the Middle is a Full Stack application where users can easily search for places in the middle of two starting points, categorised by place type, allowing them to meet others in the most convenient way. Includes several features such as:</p>
            <p className="project-description">
            <ul>
              <li>Geocoding and Nearby Search features which take two user inputs and display the midpoint/Places of Interest using location APIs. Details of the top locations are visualised on screen with their Foursquare ratings, allowing users to find suitable recommendations.</li>
              <li>A Favourites feature using a Firebase/Cloud Firestore database where users can easily ‘like’ a nearby place and save it for later use.</li>
              <li>A Ratings features where users can come back and leave a review once they have visited a place, using a Firebase 'Ratings' collection.</li>
              <li>Responsive information and contact pages, including a working contact form using EmailJS.</li>
            </ul>
            </p>

 
          </div><div className='row'>
        <div className='project-buttons'>
          <div className='col'>
          <Button variant="contained" href="https://meet-in-the-middle.netlify.app" size="large" sx={{fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          See the live app
          </Button>
          </div>
          <div className='col'>
          <Button variant="contained" href="https://github.com/AlexJackson01/meet-in-the-middle" size="large" sx={{fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          See on Github
          </Button></div>
          </div>
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
    img: Landing,
    title: "Landing Page",
    rows: 2,
    cols: 2,
  },
  {
    img: LoginPage,
    title: "Login Page",
    rows: 2,
    cols: 2,
  },
  {
    img: SearchPage,
    title: "Nearby Search",
    rows: 2,
    cols: 2,
  },
];