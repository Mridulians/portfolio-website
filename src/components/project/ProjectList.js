import React , {useState} from 'react'
import { FcExpand , FcCollapse } from 'react-icons/fc'
import Zoom from 'react-reveal/Zoom';
const ProjectList = ({ name, des, projectLink, techused  ,des2 }) => {

 const [show, setShow] = useState(false);

 const handleDesc = ()=>{

    setShow(!show);
 }

 



    return (
        <Zoom>
        <div className= {show ? "project-list-opened project-list" : "project-list"}  onClick={handleDesc}
        
        onMouseEnter ={()=>setShow(true)}

        // onMouseLeave ={() => setShow(false)}


        >

            <div className='title-and-collapse-option'>
                <h1>{name}</h1>
            <p>   {show ?<FcExpand size={20}/> : <FcCollapse size={20}/> } </p>                 
            </div>

          <div className="description">
          {show ?  <p>{des}</p> : <p>{des.substring(0. , 50)} <p>... Read More</p></p>}
          </div>

            <div className="row" style={{marginLeft:"0px"}}>
                {techused && techused.map((tech,index) =>(
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
                     
                     <div className="tech-used-in-project">
                        <p>{tech.techname}</p>
                     </div>
                    </div>
                ))}
            </div>

            <div className="live-demo-button">
                <a href={projectLink} target="_">Live Demo</a>
            </div>

        </div>
        </Zoom>
    )
}

export default ProjectList