import React from 'react'
import './Project.css';
import ProjectList from './ProjectList';

const Project = () => {

    const data = [
        {
            name: "Car Rentals",
            des: "Developed an online car rental booking system that increased customer satisfaction and revenue by 20%.",
            projectLink: "https://car-rentals-mridul.netlify.app/",
            techused: [
                {
                    techname: "ReactJs"
                },
                {
                    techname: "CSS"
                },
                {
                    techname: "EmailJs"
                },
               
            ]

        },


        {
            name: "MyTube Entertainment App",
            des: " Developed an end-to-end React-based app providing real-time data where millions of users around the world watch and cherrish the content. You can learn and earn amazing skills from MyTube ",
            projectLink: "https://mytube-mridul.netlify.app/",
            techused: [
               
                {
                    techname: "react js"
                },
                {
                    techname: "tailwind CSS"
                },
                {
                    techname: "API's"
                },
            ],
            img:"logo192.png",

        },

        {
            name: "Admin Dashboard protal",
            des: "Technologies used is ReactJs , TailwindCss for astonishing UI/UX design. Ensured the quality of the work to met client and management specifications",
            projectLink: "https://dashboard-dash1.netlify.app/",
            techused: [
                {
                    techname: "ReactJs"
                },
                {
                    techname: "TailwindCss"
                },
                {
                    techname: "SyncFusion"
                },
                
            ]

        },

        {
            name: "Restaurant Website",
            des: "It is a simple , attractive and eye catching restaurant website . made for the best user experience and using legendary black and golden theme.",
            projectLink: "https://restaurant-mridul.netlify.app/",
            techused: [
                {
                    techname: "ReactJs"
                },
                {
                    techname: "CSS"
                },
                {
                    techname: "Figma"
                },
                
            ]

        },

        

        {
            name: "TextUtils App",
            des: "Developed, implemented, and improved Word Counter Application made using ReactJs to ease down the transformation of text",
            projectLink: "https://textutils-mridul.netlify.app/ ",
            techused: [
                {
                    techname: "ReactJs"
                },
                {
                    techname: "CSS"
                },
                {
                    techname: "Bootstrap"
                },
                
            ]

        },

        {
            name: "Netflix Clone Website",
            des: "This is a netflix simplied clone website made for enhanced user experience and simplied their work",
            projectLink: " https://mridulians.github.io/netflix.github.io/",
            techused: [
                {
                    techname: "HTML"
                },
                {
                    techname: "CSS"
                },
                {
                    techname: "Javascript"
                },
                
            ]

        },
    ]


    return (
        <div className='container' id='project'>

            <div className="section-title">
                <h5>Projects</h5>
                <span className="line"></span>
            </div>

            <div className="row">
                {data.map((item,index) =>(
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
                       <ProjectList {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project