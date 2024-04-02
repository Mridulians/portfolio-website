import React , {useState} from 'react'
import './NavbarMobileView.css'
import  { Link } from "react-scroll"
import Switch from "react-switch";
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import { FcHome, FcNightPortrait, FcTodoList, FcContacts, FcFactory, FcSalesPerformance } from "react-icons/fc"
import { MdBiotech, MdCastForEducation } from "react-icons/md"

import { GiHamburgerMenu } from "react-icons/gi"

const NavbarMobileView = ({theme , changeTheme}) => {

  const [show, setShow] = useState(false)

  const handleClick = ()=>{
       setShow(!show)
  }



    return (
        <div className='mobile-view-navbar'>


            <div className="navbar-header">
                <p><GiHamburgerMenu size={25} onClick={handleClick}/></p>
            </div>

            {show ? (<div className="mobile-nav">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setShow(false)} />
                <ul>
                    <li className='nav-items-mobileView'>
                        <Link to='home' spy={true} smooth={true} duration={100} offset={-100}>
                            <FcHome size={25} />Home
                        </Link>
                    </li>

                    <li className='nav-items-mobileView'>
                        <Link to='about' spy={true} smooth={true} duration={100} offset={-100}>
                            <FcNightPortrait size={25} />About
                        </Link>

                    </li>
                    <li className='nav-items-mobileView'>
                        <Link to='work' spy={true} smooth={true} duration={100} offset={-100}>
                            <FcFactory size={25} />Work Experience
                        </Link>

                    </li>
                    <li className='nav-items-mobileView'>
                        <Link to='tech' spy={true} smooth={true} duration={100} offset={-100}>
                            <MdBiotech color='orange' size={25} />Tech Stack
                        </Link>
                    </li>
                    <li className='nav-items-mobileView'>
                        <Link to='education' spy={true} smooth={true} duration={100} offset={-100}>
                            < MdCastForEducation color='yellow' size={25} />Education
                        </Link>
                    </li>
                    <li className='nav-items-mobileView'>
                        <Link to='project' spy={true} smooth={true} duration={100} offset={-100}>
                            <FcTodoList size={25} />Projects
                        </Link>
                    </li>
                    <li className='nav-items-mobileView'>
                        <Link to='testimonials' spy={true} smooth={true} duration={100} offset={-100}>
                            <FcSalesPerformance size={25} />Testimonial
                        </Link>
                    </li>
                    <li className='nav-items-mobileView'>
                        <Link to='contact' spy={true} smooth={true} duration={100} offset={-100}>
                            <FcContacts size={25} />Contact
                        </Link>
                    </li>

                    <li className='nav-items-mobileView'>
                    <Switch onChange={changeTheme} checked={theme==="light"} />
                    </li>
                </ul>
            </div>) : null}

            
        </div>
    )
}

export default NavbarMobileView