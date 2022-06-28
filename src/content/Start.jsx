import { createContext, useState } from "react";

export const Start = createContext()

export const StartProvider = ({children}) => {
    const local = JSON.parse(localStorage.getItem('token'))
    const star = JSON.parse(localStorage.getItem('start'))
    const [start, setStart] = useState(star || {
        start: false,
        token: null,
    });
    const [token, setToken] = useState(local || '');
    
    const data = {
        start,
        setStart,
        token,
        setToken
    }


    return <Start.Provider value={data}>{children}</Start.Provider>
}