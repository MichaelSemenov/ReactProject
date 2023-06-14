import "./style.css";
import vk from "./../../image/icons8-vk-48.png";
import instagram from "./../../image/icons8-instagram-48.png";
import telegram from "./../../image/icons8-телеграмма-app-48.png";
import github from "./../../image/icons8-github-48.png";

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
            <ul className="social">
                    <li className="social__item">
                        <a href="#!">
                            <img src={vk} alt="Link"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://www.instagram.com/thesimenov">
                            <img src={instagram} alt="Link"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://t.me/Mik536">
                            <img src={telegram} alt="Link"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://github.com/MichaelSemenov">
                            <img src={github} alt="Link"/>
                        </a>
                    </li>
                </ul>
                    <div className="copyright">
                        <p>@ vf.bsuir 2023</p>
                    </div>
        </div>
    </div>
    </footer>
     );
}
 
export default Footer;