import "./style.css";

const Header = () => {
    return ( <header className="header">
    <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Hello, my name is <em>Michael</em></strong><br/>
             BackEnd software engineer<br/>
             Fullstack web developer<br/>
             <h1> С++, Java, С# Programmer</h1>
        </h1>
        <div className="header_text">
            <p>with passion for learning and realization</p>
        </div>
        <a href="#!" className="btn">Download CV</a> 
    </div>
</header> );
}
 
export default Header;