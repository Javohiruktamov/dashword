import { createContext, useState } from "react";

export const DarkmodeContext = createContext();

export const DarkmodeContextProvider = ({children}) => {
    let [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("dark")) || "light");

    return (
        <DarkmodeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkmodeContext.Provider>
    );
};