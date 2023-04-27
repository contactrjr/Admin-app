import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./Authreducer";

const INITITAL_STATE = {
    activeUser: JSON.parse(localStorage.getItem("user")) || null,
}

export const AuthContext = createContext(INITITAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITITAL_STATE);

    useEffect (() =>{
        localStorage.setItem("user",JSON.stringify(state.activeUser));
    }, [state.activeUser])

    return(
        <AuthContext.Provider value={{activeUser: state.activeUser, dispatch}}>
            {children}
        </AuthContext.Provider>
    );


}


