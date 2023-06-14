import gitHubIcon from "./../../image/icons8-github-48.png";

const BtnGitHub = ({link}) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={gitHubIcon} alt="Link"/>
        GitHub repo
     </a>
     );
}
 
export default BtnGitHub;