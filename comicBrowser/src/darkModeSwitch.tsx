import {useContext} from 'react';
import {DarkModeContext} from './context/darkModeContext';
import darkBulb from './assets/darkBulb.svg'
import lightBulb from './assets/lightBulb.svg'
function DarkModeSwitch() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className="Lightswitch">
            <img className="darkThemeIcon" src={darkMode ? 
           lightBulb : darkBulb} alt="Lightswitch on" onClick={handleClick}/>          
        </div>
    )
}

export default DarkModeSwitch