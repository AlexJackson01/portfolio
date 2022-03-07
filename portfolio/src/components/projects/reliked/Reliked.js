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
            <h2>Reliked Multivendor Marketplace<br />Feature Extension</h2>
            <h6>Full Stack</h6>
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
            <p className='project-description'>Reliked is a company that sells the preowned clothing and beauty items of popular influencers. As a growing company, they were presented with a need to find a superior way to communicate with their clients, and so the Multivendor Marketplace was born.</p>
            <p className='project-description'>The Multivendor Marketplace was built by a fellow student on my bootcamp and as part of the course, I was tasked with adding several features to her project. I created a login feature using MySQL, JSON Web Tokens and BCrypt which distinguishes between user types. If the user type is admin, they will see the admin view dashboard. Using GraphQL and the Shopify API, I introduced a filtering feature that allows admin users to filter sales and products by influencer using a search box, and also see all products that are up for sale/have been sold on the site as a whole. I also introduced the first layer of pagination which allows the user to see multiple pages of items via the products/sales areas. </p>
            <p className='project-description'>If the logged in user is recognised as a vendor, they will see a different dashboard and their own products and sales only - this was built by a fellow student and I coded the login feature with this in mind. All features were designed in line with the original Multivendor Marketplace styling.</p>
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