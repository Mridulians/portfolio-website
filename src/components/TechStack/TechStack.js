import React , {useState} from 'react'
import './TechStack.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
const TechStack = () => {



    const data =[
        // {
        //     name: "Frontend  Developer"
        // },
        {
            name: "ReactJs"
        },
        {
            name: "HTML"
        },
        {
            name: "CSS"
        },
        {
            name: "Javascript"
        },
        {
            name: "Bootstrap"
        },
        {
            name: "Tailwind"
        },
        {
            name: "SASS"
        },
        {
            name: "C/C++"
        },
        {
            name: "UI/UX Design"
        },
        {
            name: "API Integration"
        },
        {
            name: "Git/Github"
        },
        {
            name: "TypeScript"
        },

    ]

    const color =[
        "#DFFF00",
        "#6495ED",
        "#DE3163",
        "#40E0D0",
        "#6C3483 ",
        "#117A65 ",
        "#EC7063",
        "#40E0D0",
        "#17202A ",
        "#FFA07A",
        "#C0392B ",
        "goldenRod",
    ]

    const [showMoreTechStack, setShowMoreTechStack] = useState(3)

    const loadMore = ()=>{
   setShowMoreTechStack((prev) =>prev+3);
    }

  return (
    <div className='container techStack-section' id='tech'>

        <div className="section-title">
            <h5>Tech Stack</h5>
            <span className="line"></span>
        </div>

        <div className="row">
              {data.slice(0,showMoreTechStack).map((item,index) =>(
                <Fade right>

                
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                    <div className={index===0 ? "tech-content-marked tech-content" :  "tech-content"}>
                        <span className="tech-number" style={{backgroundColor : color[index]}} >
                           {index+1}
                        </span>
                        <p>{item.name}</p>
                    </div>
                </div>
                </Fade>
              ))}
        </div>
       
       
        {showMoreTechStack >= data.length ? null :  <Zoom> <span className="load-more-tech-stack" onClick={loadMore}>
            load more
        </span>
            </Zoom>

        }
        
    </div>
  )
}

export default TechStack