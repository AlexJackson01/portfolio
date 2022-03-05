import './App.css';
import Navbar from './components/Navbar';
import Me from "../src/me.png";
import Fade from 'react-reveal/Fade';
import Button from '@mui/material/Button';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div>
    <section className="hero">
      <Navbar />
      <Fade bottom>
      <div className="hero-area">
        <div className="hero-text">
          <h1>Alex Jackson</h1>
          <p className="hero-title">Front-End Developer</p>
          <div className="button">
          <Button variant="contained" href="#about-me" size="large" sx={{backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          About Me
          </Button>
          </div>
        </div>
        <div className="socials">
          <div>
            <a href="https://www.linkedin.com/alex-j-jackson" className="social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="https://www.github.com/AlexJackson01" class="social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      </Fade>
    </section>

    <Routes>
        <Route
          path="/#about-me"
          element={
            <About />
          }
        />
        <Route
          path="/#projects"
          element={
            <Projects />
          }
        />
        <Route
          path="/#contact"
          element={
            <Contact />
          }
        />
      </Routes>






    <section class="sub-section" id="about-me">
      <div class="information">
        <h2>About Me</h2>
        <p>Hello, my name is Alex Jackson. I am a Front-End Developer....</p>
      </div>
      <div class="headshot-container">
        <img
          class="headshot"
          src={Me}
          alt="Alex Jackson headshot"
        />
      </div>
    </section>

    <section class="sub-section-alternative" id="projects">
      <h2>Projects</h2>
      <div class="project-container">
        <div class="project-card">
          <img
            class="project-image"
            src="images/RikRok.png"
            alt="Project 1 image"
          />
          <h3>TikTok Clone</h3>
          <p class="subtext">This is my project...</p>
          <hr />
          <p class="subtext">
            <a
              class="project-link"
              href="https://naughty-cray-2e5fd3.netlify.app/#/"
              >View here</a>
          </p>
        </div>
        <div class="project-card">
          <img class="project-image" src="images/BB.png" alt="Project 2 image" />
          <h3>Beaut Bakes Website</h3>
          <p class="subtext">This is my project...</p>
          <hr />
          <p class="subtext"><a
            class="project-link"
            href="https://www.beautbakes.co.uk"
            >View here</a>
          </p>
        </div>
        <div class="project-card">
          <img class="project-image" src="images/Hangman.png" alt="Project 3 image" />
          <h3>Hangman Game</h3>
          <p class="subtext">This is my project...</p>
          <hr />
          <p class="subtext">View here</p>
        </div>
        <div class="project-card">
          <img class="project-image" src="images/petflix.png" alt="Project 4 image" />
          <h3>Netflix Clone</h3>
          <p class="subtext">This is my project...</p>
          <hr />
          <p class="subtext"><a class="project-link"
            href="https://romantic-ramanujan-0b1635.netlify.app/#/"
            >View here</a></p>
        </div>
      </div>
    </section>

    <footer id="contact">
      <h2 class="information-alternative">Contact Me</h2>
      <div class="form">
        <form
          action="https://formsubmit.co/ajjackson22@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New email!" />
          <input
            class="form-row"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            class="form-row"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <input type="hidden" name="_next" value="./thanks.html" />
          <input
            class="form-row"
            type="text"
            name="message"
            placeholder="Write your message here"
            required
          />
        </form>
      </div>
          <div class="form-button-container">
            <button class="form-button" type="submit">Send</button>
          </div>
          </footer>
    </div>
  );
}

export default App;