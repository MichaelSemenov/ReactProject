
import Header from "./../components/header/header";
import ListProjects from "../Projects/Project.js";
const Home = () => {
    return ( 
    <>
        <Header/>
    <main className="section">
    <div className="container">
        <h2 className="title_1">Projects</h2>
            <ul className="projects">
                <ListProjects/>
            </ul>
    </div>
</main> 
</>
);
}
 
export default Home;