import { useContext } from "react";
import { Start } from "../content/Start";


function useStart() {
    const { start, setStart, token, setToken } = useContext(Start)
    return {start, setStart, token, setToken};
}

export default useStart;