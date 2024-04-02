import React from 'react'
import './About.css';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Myself2 from './Myself2.jpeg'
const About = () => {
  return (
    <div className='container about-section' id='about'>

      <div className="row">

        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" >

            <div className="about-image">
              <img src={Myself2} alt="mridul" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

          <div className="about-details">
            <Flip left >
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>
            <Fade right>
              <p>
                I am a passionate software developer who loves to solve problems and work on real world projects.
                Basically , i am a Frontend Web Developer who is keen to develop and design new websites using my technical skills and knowledge.
                I am able to manage the projects , improve it and maintain it.
                I help companies to improvise and enhancing their frontend part  with my outmost potentail so that they can serve better and fly to victory.

                Work as a Frontend React developer Intern in Rablo.in for two months (Sept 2022 - Nov 2022).
                there i learn a lot about real world exposure and work on industry level projects.

              
              </p>
            </Fade>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About