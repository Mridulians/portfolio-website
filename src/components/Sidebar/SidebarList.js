import React from 'react'
import "./SidebarList.css"
import  { Link } from "react-scroll"
import Myself from './Myself.jpg'


import { FcHome, FcNightPortrait, FcTodoList, FcContacts, FcFactory, FcSalesPerformance } from "react-icons/fc"
import { MdBiotech, MdCastForEducation } from "react-icons/md"

const SidebarList = ({ expandSidebar }) => {
    return (
        <React.Fragment>

            {
                expandSidebar ? (<div className="navbar-items">


                    <div className="sidebar-profile-pic">
                        
                        <img src={Myself} alt="profile" />
                    </div>

                    <ul style={{marginTop:"-20px"}}>
                        <li className='nav-items'>
                            <Link to='home' spy={true} smooth={true} duration={100} offset={-100}>
                                <FcHome size={25} />Home
                            </Link>
                        </li>

                        <li className='nav-items'>
                            <Link to='about' spy={true} smooth={true} duration={100} offset={-100}>
                                <FcNightPortrait size={25} />About
                            </Link>

                        </li>
                        <li className='nav-items'>
                            <Link to='work' spy={true} smooth={true} duration={100} offset={-100}>
                                <FcFactory size={25} />Work Experience
                            </Link>

                        </li>
                        <li className='nav-items'>
                            <Link to='tech' spy={true} smooth={true} duration={100} offset={-100}>
                                <MdBiotech color='orange' size={25} />Tech Stack
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='education' spy={true} smooth={true} duration={100} offset={-100}>
                                < MdCastForEducation color='yellow' size={25} />Education
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='project' spy={true} smooth={true} duration={100} offset={-100}>
                                <FcTodoList size={25} />Projects
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='testimonials' spy={true} smooth={true} duration={100} offset={-100}>
                                <FcSalesPerformance size={25} />Testimonial
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='contact' spy={true} smooth={true} duration={100} offset={-100}>
                                <FcContacts size={25} />Contact
                            </Link>
                        </li>
                    </ul>

                    

                </div>) : (
                    <div className='navbar-items-only-icons'>
                      <ul>
                        <li className='nav-items'>
                            <Link to='home' spy={true} smooth={true} duration={100} offset={-100}>
                                <FcHome size={25} />
                            </Link>
                        </li>

                        <li className='nav-items'>
                            <Link to='about' spy={true} smooth={true} duration={100} offset={-100}>
                                <FcNightPortrait size={25} />
                            </Link>

                        </li>
                        <li className='nav-items'>
                            <Link to='work' spy={true} smooth={true} duration={100} offset={-100}>
                                <FcFactory size={25} />
                            </Link>

                        </li>
                        <li className='nav-items'>
                            <Link to='tech' spy={true} smooth={true} duration={100} offset={-100}>
                                <MdBiotech color='orange' size={25} />
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='education' spy={true} smooth={true} duration={100} offset={-100}>
                                < MdCastForEducation color='yellow' size={25} />
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='project' spy={true} smooth={true} duration={100} offset={-100}>
                                <FcTodoList size={25} />
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='testimonials' spy={true} smooth={true} duration={100} offset={-100}>
                                <FcSalesPerformance size={25} />
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='contact' spy={true} smooth={true} duration={100} offset={-100}>
                                <FcContacts size={25} />
                            </Link>
                        </li>
                    </ul>

                    </div>
                )
            }



        </React.Fragment>
    )
}

export default SidebarList