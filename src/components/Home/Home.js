import React from 'react'
import "./Home.css";
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"



import cv from './Mridul_Resume.pdf';


const Home = ({ theme, changeTheme }) => {
  return (
    <div className='container-fluid home' id='home'>

      <div className="theme-change" onClick={changeTheme}>

        {theme === "light" ? (<p><BsFillMoonStarsFill size={40} /></p>) : (<p className='sun-theme-icon'><BsFillSunFill size={40} /></p>)}

      </div>


      <div className="container home-content" >
        <Fade left>
          <h1>Hi i'm  </h1>
          
            <h2>MRIDUL GUPTA</h2>
            {/* <div className="content">
              <h2>MRIDUL GUPTA</h2>
              <h2>MRIDUL GUPTA</h2>
            </div> */}
            
          <h3>
            <Typewriter
              options={{
                strings: [
                  'Frontend Developer',
                  'Software Developer',
                  'UI/UX Developer',
                  'Video Editor',
                ],
                autoStart: true,
                loop: true,
                delay: 5
              }}
            />
          </h3>
        </Fade>

        <Fade bottom>
          <div className="button-for-action">

            <div className='hire-me-button'>
              hire me
            </div>

            <div className='get-resume-button'>
              <a href={cv} download="Mridul_Resume"> get resume</a>


            </div>
          </div>
          </Fade>

      </div>


    </div>
  )
}

export default Home;