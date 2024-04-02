import React from 'react'
import './Education.css';


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaGraduationCap } from "react-icons/fa"

const Education = () => {

    const data = [
        {
            name: "GGSIPU University",
            degree: "B-tech CSE",
            year: "2020-2024",
            des: "I am currently pursuing my bachelors degree in computer science and engineering from DR. Akhilesh Das Gupta instutute of technology and management with an aggregate score of 9.5 CGPA till 6th sem. "
        },

        {
            name: "Tyagi Public School",
            degree: "(10+2)",
            year: "2019-2020",
            des: "I completed my 12th standard from the most reputed school in the town. and i scored an aggregate of 90.16% in CBSE Board."
        },

        {
            name: "Tyagi Public School",
            degree: "(10Th) Standard",
            year: "2017-2018",
            des: "I completed my 10th standard from the most reputed school in the town. and i scored an aggregate of 85% in CBSE Board."
        },

        // {
        //     name: "Amity University",
        //     degree: "B-tech CSE",
        //     year: "2020-2024",
        //     des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt earum recusandae officia in dolore officiis tenetur esse quod cumque quidem"
        // },
    ]

    const colors = [
        "#FF1042",
        "#FF8042",
        "#001CCE",
        // "#FF1042"
    ]



    return (
        <div className='container education-section' id='education'>
            <div className="section-title">
                <h5>Education</h5>
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
                            icon={<FaGraduationCap  />}
                        >
                            <h3 className="vertical-timeline-element-title">{item.name}</h3>
                            <h5 className="vertical-timeline-element-subtitle">{item.degree}</h5>
                            <p>
                                {item.des}
                            </p>
                        </VerticalTimelineElement>
                    ))}

                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Education