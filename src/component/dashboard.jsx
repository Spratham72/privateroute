import { useContext } from "react"
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const Dashboard=()=>{
    const {token}=useContext(AuthContext);
    if(!token){
        return <Navigate to="/login"></Navigate>
    }
    return <><h3>Weolcome to dashboard</h3></>
}