import img from "./../image/photo_2023-06-05_09-41-58.jpg";
import BtnGitHub from "./../components/btnGitHub/BtnGitHub.js"

import { useParams } from "react-router-dom";
import { projects } from "./../Projects/ArrayProjects.js";
const ProjectOne = () => {

    const {id} =  useParams();                      /**Деструктуризация параметра переданного через роутер! */
    const project = projects[id];

    console.log(project);

    return ( 
        <>
        <main className="sectionN">
        <div className="container">
            <div className="project-details">
            {/* <h1 className="title_1">Scan file system dublicated</h1> */}
            <h1 className="title_1">{project.title}</h1>
            <p>{id}</p>
             <img src={project.img} alt="" className="project-details__cover"/>
             <div className="project-details__desc">
                {/* <p>Skills: C++ 20</p> */}
                <p>Skills: {project.skills}</p>
             </div>
             <BtnGitHub link="https://github.com"/>
        </div>
        </div>
    </main>
    </>
     );
}
 
export default ProjectOne;