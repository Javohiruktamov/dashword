import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    let initialToken = JSON.parse(localStorage.getItem("token"))

    let [token, setToken] = useState(initialToken);

    if(token){
        localStorage.setItem("token", JSON.stringify(token))
    }else{
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    );
};