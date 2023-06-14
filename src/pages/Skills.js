import "../styles/main.css";

const Skills = () => {
    return ( 
        <main className="section">
        <div className="container">
            <h1 className="title_1">Skills</h1>
    
            <ul className="content-list">
    
                <li className="content-list__item">    
                    <h2 className="title_2">FrontEnd</h2>
    
                    <p>JavaScript, CSS, HTML, ReactJS, Angular, MUI, BootStrap, MaterialUI, Figma</p>
                </li>
                <li className="content-list__item">      
                    <h2 className="title_2">BackEnd</h2>
                    <p>Java, С#, C++, Postman, Postgresql, Spring, ASP.NET Core web API</p>
                </li>
            </ul>
        </div>
     </main>
     );
}
 
export default Skills;