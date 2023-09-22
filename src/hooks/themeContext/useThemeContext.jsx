import { Children,createContext,useContext,useEffect,useState } from "react";

export const themeContext = createContext();

export const useThemeContext = () => {
    return useContext(themeContext);
};


export const ThemeContext = ({ children }) => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const [ darkMode,setDarkMode ] = useState(darkModeMediaQuery.matches);

    const theme = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const handleDarkModeChange = () => {
            setDarkMode(darkModeMediaQuery.matches);
        };

        darkModeMediaQuery.addEventListener('change',handleDarkModeChange);

        return () => {
            darkModeMediaQuery.removeEventListener('change',handleDarkModeChange);
        };
    },[]);

    const values = {
        darkMode,
        theme
    };

    return <themeContext.Provider value={values}>{children}</themeContext.Provider>;
};