import pagefilesystemdublicated from "./../image/photo_2023-06-05_09-41-58.jpg";
import pageCruFullStackWebApplication from "./../image/photo_2023-06-05_10-54-45.jpg";
import pageFitnesTracker from "./../image/photo_2023-06-05_12-13-23.jpg";

const PageFullProject = () => {
    return ( 
        <>
        <li className="project">
        <a href="project-page.html">
        <img src={pagefilesystemdublicated} alt="Project img" className="project_img"/>
        <h3 className="project_title">Scan file system</h3>
    </a>
    </li>
    <li className="project">
        <a href="">
        <img src={pageCruFullStackWebApplication} alt="Project img" className="project_img"/>
        <h3 className="project_title">CRUD FullstackApplication</h3>
    </a>
    </li>
    <li className="project">
        <a href="">
        <img src={pageFitnesTracker} alt="Project img" className="project_img"/>
        <h3 className="project_title">Fitness-Tracker</h3>
    </a>
    </li>
    </>
     );
}
 
export default PageFullProject;