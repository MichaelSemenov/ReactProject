import pagefilesystemdublicated from "./../image/photo_2023-06-05_09-41-58.jpg";
import { NavLink } from "react-router-dom";

// const OnePageProject = (props   ) => {
    const OnePageProject = ({title, img, index}) => {
    return ( 
        <NavLink to={"project/" + index}>
        <li className="project">
        {/* <a href="project-page.html"> */}
        <img src={img} alt="Project img" className="project_img"/>
        <h3 className="project_title">{title}</h3>
    {/* </a> */}
    </li>
    </NavLink>
     );
}
 
export default OnePageProject;
