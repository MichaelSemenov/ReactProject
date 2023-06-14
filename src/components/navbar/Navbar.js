import BtnDarkMode from "../btnDarkMode/btnDarkMode";
import "./style.css";

import {NavLink} from "react-router-dom";

const Navbar = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';


    return (  
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo">
                {/* <a href="./index.html" className="logo"> </a> */}
                <strong>Developer</strong> portfolio 
                </NavLink>

                <BtnDarkMode/>

                <ul className="nav-list">
                    <NavLink to="/" className="nav-list__link nav-list__link--active change-text">
                    <li className="nav-list__item">
                        {/* <a href="./index.html" className="nav-list__link nav-list__link--active change-text"></a> */}
                        Project
                        </li>
                    </NavLink>
                    <NavLink to="/skills" className="nav-list__link change-text nav-list__link--active">

                    <li className="nav-list__item">
                        {/* <a href="./project-skills.html" className="nav-list__link change-text nav-list__link--active"></a> */}
                            Skills                       
                            </li>
                    </NavLink>
                   <NavLink to="/contacts" className="nav-list__link change-text">
                    <li className="nav-list__item">
                        {/* <a href="./project-contacts.html" className="nav-list__link change-text"> </a>*/}
                            Contacts
                    </li>
                    </NavLink>   
                </ul>
            </div>
        </div>
    </nav>
    );
}
 
export default Navbar;