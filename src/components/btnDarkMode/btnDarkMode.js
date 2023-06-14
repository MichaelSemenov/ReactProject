import sun from "./../../image/SunNight/icons8-солнце.svg";
import moon from "./../../image/SunNight/night-01_icon-icons.com_65776.svg";
import { useState, useEffect, useRef } from "react";
import {useLocalStorage} from "./../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";

const BtnDarkMode = () => {
    
const [darkMode, setDarkmode] = useLocalStorage('darkMode', detectDarkMode());
//const [darkMode, setDarkmode] =  useState('light');
const btnRef = useRef(null);
    const toggleDarkMode = ()=>{
            setDarkmode((currentValue) => {
                return currentValue==='light' ? 'dark' : 'light';
            });
    }

useEffect(() =>{
if(darkMode==='dark'){
    document.body.classList.add('dark')
    btnRef.current.classList.add('dark-mode-button--active')
}else{
    document.body.classList.remove('dark');
    btnRef.current.classList.remove('dark-mode-button--active')
}
}, [darkMode]);

useEffect(()=>{
 window.matchMedia('prefers-color-scheme: dark').addEventListener('change', (event)=>{
        const newColorScheme = event.matches ? 'dark' : 'light';
        setDarkmode(newColorScheme);
 });
}, []);

    return (
        <button ref={btnRef} type="button" className="dark-mode-button" onClick={toggleDarkMode}>{/*использования ref для опеределения в классе в данном компоненте*/}
        <img src={sun} alt="Light mode" className="dark-mode-button-icon"/>
        <img src={moon} alt="Dark mode" className="dark-mode-button-icon"/>
    </button>
      );
}
 
export default BtnDarkMode;