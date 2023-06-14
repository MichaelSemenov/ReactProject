import "../styles/main.css"

import PageFullInformationProjects from "./PageFullProject";
import PropertiesProject from "./PropertiesProject";

import {projects} from "./ArrayProjects.js";
const Projects = () => {
    return ( 
    <>
    {projects.map((project, index)=>{
        return (
            <PropertiesProject key={index} 
            title={project.title} 
            img={project.img}
            index={index}
            />
        )
    })}
    {console.log(projects)}
    </>
     );
}
 
export default Projects;