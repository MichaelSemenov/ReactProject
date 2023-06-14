import ScanFile from "./../image/photo_2023-06-05_09-41-58.jpg";
import github from "./../image/icons8-github.svg";

const Projects = () => {
    return (      <main className="sectionN">
    <div className="container">
        <div className="project-details">
        <h1 className="title_1">Scan file system dublicated</h1>
         <img src={ScanFile} alt="" className="project-details__cover"/>
         <div className="project-details__desc">
            <p>Skills: C++ 20</p>
         </div>
         <a href="https://github.com/MichaelSemenov/filesystem-OSSP.git" className="btn-outline">
            <img src={github} alt="Link"/>
            GitHub repo
         </a>
    </div>
    </div>
</main>
);
}
 
export default Projects;