import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const UseAuthContext = () =>{
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useWorkoutsContext must be used inside an AuthContextProvider')
    }

    return context
}