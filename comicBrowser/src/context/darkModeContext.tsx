import {ReactNode, createContext, useState} from 'react';

// Context to make darkmode generally available, for easier use than state


export type DarkModeType = {
    darkMode: boolean
    toggleDarkMode:() => void
  }
  const DarkModeContext = createContext<DarkModeType>({darkMode: false, toggleDarkMode: () => {}});

function DarkModeProvider(props: { children: ReactNode }){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div>  
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
};

export {DarkModeContext, DarkModeProvider};