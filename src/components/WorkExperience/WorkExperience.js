import React from 'react'
import './WorkExperience.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdGroupWork } from "react-icons/md"

const WorkExperience = () => {

    const data = [
        {
            companyname: "Nyadeko",
            position: "Software developer",
           
          desc:"1. Worked with the Redwing team of 10 persons to improve app performance by optimizing API calls and static proping frequently used elements of data.",
          desc1:"2. Used javascript library to developed over 10+ pages of website.",
          
            year: "2023",
            techskills: [
                {
                    techname: "Reactjs",
                },
                {
                    techname: "Figma",
                },
                {
                    techname: "Javascript",
                },
                {
                    techname: "Typescript",
                },
                {
                    techname: "CSS",
                },
            ],
        },

        {
            companyname: "rablo.in",
            position: "Front End developer",
            desc: "1. Acquiring industry-specific experience , gaining insights and increases my efficiency by 10X.",
            year: "2022",
            techskills: [
                {
                    techname: "Reactjs",
                },
                {
                    techname: "CSS",
                },
                {
                    techname: "HTML",
                },
                {
                    techname: "Tailwind",
                },
                {
                    techname: "Redux",
                },
            ],
        },


    ]

    const colors = [
        "#FFBB28",
        "#FF8042",
        "#001CCE",
        "#4808BA",
        "#FF6347",
        "#FF1042"
    ]



    return (
        <div className='container' id='work' style={{ marginTop: "80px"}}>
            <div className="section-title">
                <h5>Work Experience</h5>
                <span className="line"></span>
            </div>



            <div className="timeline-section">

                <VerticalTimeline lineColor="#FF1042">


                    {data.map((item, index) => (

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: colors[index], color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={item.year}
                            dateClassName="date-class"
                            iconStyle={{ background: colors[index], color: '#fff' }}
                            icon={<MdGroupWork />}
                        >
                            <h3 className="vertical-timeline-element-title">{item.companyname}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>


                            <div className="row">
                                {item.techskills.map((tec, index) => (

                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>

                                        <div className="tech-skills">
                                            <p>{tec.techname}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>






                            <p>
                                {item.desc}
                            </p>
                            <p>
                                {item.desc1}
                            </p>
                        </VerticalTimelineElement>
                    ))}

                </VerticalTimeline>
            </div>

        </div>
    )
}

export default WorkExperience