import React from "react";
import Fade from "react-reveal/Fade";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import {
  Javascript,
  Hub,
  Css,
  ShoppingBag,
  SetMeal,
  VpnKey,
  Route,
  Security,
  LocalFireDepartment,
  Email,
  ArrowForward,
  ArrowBack,
} from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import Logo from "../reliked/reliked-logo.jpg";
import Admin from "../reliked/reliked-admin.png";
import Admin2 from "../reliked/reliked-admin2.png";
import Vendor from "../reliked/reliked-vendor.png";
import Vendor2 from "../reliked/reliked-vendor2.png";
import Products from "../reliked/reliked-products.png";
import Sales from "../reliked/reliked-sales.png";
import LoginPage from "../reliked/reliked-login.png";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Reliked() {
  return (
    <div>
      <section>
        <Fade bottom>
          <h2>
            Reliked Multivendor Marketplace
            <br />
            Feature Extension
          </h2>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <ImageList
                // sx={{ width: "100%" }}
                variant="quilted"
                cols={4}
                rowHeight={121}
              >
                {itemData.map((item) => (
                  <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                  >
                    <img
                      {...srcset(item.img, 121, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="tech-stack">
                <Stack
                  className="tech-icons"
                  direction="row"
                  spacing={1}
                  sx={{ color: "white", display: "block", margin: "0" }}
                >
                  <Chip
                    icon={<Javascript style={{ color: "white" }} />}
                    label="Javascript"
                    variant="Filled"
                    sx={{ color: "white", fontFamily: "Montserrat" }}
                  />
                  <Chip
                    icon={<Hub style={{ color: "white" }} />}
                    label="React"
                    variant="Filled"
                    sx={{ color: "white", fontFamily: "Montserrat" }}
                  />
                  <Chip
                    icon={<Css style={{ color: "white" }} />}
                    label="CSS/Bootstrap"
                    variant="Filled"
                    sx={{ color: "white", fontFamily: "Montserrat" }}
                  />
                  <Chip
                    icon={<Javascript style={{ color: "white" }} />}
                    label="Node/ExpressJS"
                    variant="Filled"
                    sx={{ color: "white", fontFamily: "Montserrat" }}
                  />
                  <Chip
                    icon={<ShoppingBag style={{ color: "white" }} />}
                    label="Shopify API"
                    variant="Filled"
                    sx={{ color: "white", fontFamily: "Montserrat" }}
                  />
                  <Chip
                    icon={<Hub style={{ color: "white" }} />}
                    label="GraphQL"
                    variant="Filled"
                    sx={{ color: "white", fontFamily: "Montserrat" }}
                  />
                  <Chip
                    icon={<SetMeal style={{ color: "white" }} />}
                    label="MySQL"
                    variant="Filled"
                    sx={{ color: "white", fontFamily: "Montserrat" }}
                  />
                  <Chip
                    icon={<VpnKey style={{ color: "white" }} />}
                    label="JSON Web Tokens"
                    variant="Filled"
                    sx={{ color: "white", fontFamily: "Montserrat" }}
                  />
                  <Chip
                    icon={<Route style={{ color: "white" }} />}
                    label="React Router"
                    variant="Filled"
                    sx={{ color: "white", fontFamily: "Montserrat" }}
                  />
                  <Chip
                    icon={<Hub style={{ color: "white" }} />}
                    label="Axios"
                    variant="Filled"
                    sx={{ color: "white", fontFamily: "Montserrat" }}
                  />
                  <Chip
                    icon={<Security style={{ color: "white" }} />}
                    label="BCrypt"
                    variant="Filled"
                    sx={{ color: "white", fontFamily: "Montserrat" }}
                  />
                </Stack>
              </div>
              <p className="project-description">
                The Multivendor Marketplace is a Full Stack portal that enables
                effective communication routes between staff and vendors at
                Reliked, a business that sells the preowned clothing and beauty
                of over 350 social media influencers. I built several features
                on top of a legacy project, including:
              </p>
              <p className="project-description">
                <ul>
                  <li>
                    Allowing User Login and role-based data visualisation by
                    implementing Authentication and Authorisation using
                    technologies such as MySQL (holding user data and type),
                    JSON Web Tokens (generating tokens) and bcrypt (password
                    hashing).
                  </li>
                  <li>
                    Product and sales filtering by vendor using GraphQL and the
                    Shopify API - this allows admin staff to investigate and
                    answer vendor queries more efficiently and vendors to access
                    information on which of their items have been sold.
                  </li>
                  <li>
                    GraphQL pagination so vendors and admin staff can view more
                    than one page of products and sales at a time.
                  </li>
                  <li>
                    Additional styling in line with the Reliked branding
                    guidelines for consistency across the portal.
                  </li>
                </ul>
              </p>

              {/* <p className='project-buttons'><Button variant="contained" href="https://github.com/AlexJackson01/meet-in-the-middle" size="large" sx={{fontFamily: "Montserrat", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          See on Github
          </Button></p> */}
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
}

const itemData = [
  {
    img: Logo,
    title: "Logo",
    rows: 2,
    cols: 2,
  },
  {
    img: Admin,
    title: "Landing Page",
    rows: 2,
    cols: 2,
  },
  {
    img: Sales,
    title: "Login Page",
    rows: 2,
    cols: 2,
  },
  {
    img: LoginPage,
    title: "Nearby Search",
    rows: 2,
    cols: 2,
  },
];
