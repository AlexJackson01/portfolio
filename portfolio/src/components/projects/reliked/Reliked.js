import React from 'react';
import Fade from 'react-reveal/Fade';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Javascript, Hub, Css, ShoppingBag, SetMeal, VpnKey, Route, Security, 
  LocalFireDepartment, Email, ArrowForward, ArrowBack} from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel'
import Logo from "../reliked/reliked-logo.jpg";
import Admin from "../reliked/reliked-admin.png";
import Admin2 from "../reliked/reliked-admin2.png";
import Vendor from "../reliked/reliked-vendor.png";
import Vendor2 from "../reliked/reliked-vendor2.png";
import Products from "../reliked/reliked-products.png";
import Sales from "../reliked/reliked-sales.png";
import LoginPage from "../reliked/reliked-login.png";


const items = [
        {
            name: "Reliked Logo",
            Image: Logo,
        },
        {
            name: "Login Page",
            Image: LoginPage
        },
        {
          name: "Admin Page",
          Image: Admin
        },
        {
          name: "Admin Page",
          Image: Admin2
        },
        {
          name: "Products Filter",
          Image: Products
        },
        {
          name: "Pagination",
          Image: Sales
        },
        {
          name: "Vendor Page",
          Image: Vendor
        },
        {
          name: "Vendor Page",
          Image: Vendor2
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


export default function Reliked() {
  return (
    <div>
        <section>
            <Fade bottom>
                <div className='project-carousels row'>
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
            <h2>Reliked Multivendor Marketplace<br />Feature Extension</h2>
            <div className='tech-stack'>
              <Stack className="tech-icons" direction="row" spacing={1} sx={{color: "white", display: "block", margin: "0"}}>
              <Chip icon={<Javascript style={{color: "white"}}/>} label="Javascript" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<Hub style={{color: "white"}}/>} label="React" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              <Chip icon={<Css style={{color: "white"}}/>} label="CSS/Bootstrap" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              <Chip icon={<Javascript style={{color: "white"}}/>} label="Node/ExpressJS" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<ShoppingBag style={{color: "white"}}/>} label="Shopify API" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              <Chip icon={<Hub style={{color: "white"}}/>} label="GraphQL" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              <Chip icon={<SetMeal style={{color: "white"}}/>} label="MySQL" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<VpnKey style={{color: "white"}}/>} label="JSON Web Tokens" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              <Chip icon={<Route style={{color: "white"}}/>} label="React Router" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              <Chip icon={<Hub style={{color: "white"}}/>} label="Axios" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}} />
              <Chip icon={<Security style={{color: "white"}}/>} label="BCrypt" variant="Filled" sx={{color: "white", fontFamily: "Montserrat"}}/>
              </Stack>
            </div>
            <p className="project-description">
            The Multivendor Marketplace is a Full Stack portal that enables effective communication routes between staff and vendors at Reliked, a business that sells the preowned clothing and beauty of over 350 social media influencers. I built several features on top of a legacy project, including:</p>
            <p className='project-description'>
              <ul>
                <li>Allowing User Login and role-based data visualisation by implementing Authentication and Authorisation using technologies such as MySQL (holding user data and type), JSON Web Tokens (generating tokens) and bcrypt (password hashing).</li>
                <li>Product and sales filtering by vendor using GraphQL and the Shopify API - this allows admin staff to investigate and answer vendor queries more efficiently and vendors to access information on which of their items have been sold.</li>
                <li>GraphQL pagination so vendors and admin staff can view more than one page of products and sales at a time.</li>
                <li>Additional styling in line with the Reliked branding guidelines for consistency across the portal.</li>
              </ul>
            </p>

            <p className='project-buttons'><Button variant="contained" href="https://github.com/AlexJackson01/meet-in-the-middle" size="large" sx={{fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          See on Github
          </Button></p>
          </div>
          </div>

      </Fade>
    </section>
    </div>
  )
}