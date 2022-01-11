import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


export const Login=()=>{
    const {handleToken}=useContext(AuthContext);

    const login=(e)=>{
        fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify({"email": "eve.holt@reqres.in",
            "password": "cityslicka"}),
            headers:{'Content-Type': 'application/json'}
    }).then(res=>res.json()).then(res=>handleToken(res))
    }
    return <div>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button onClick={login}>Login</button>
    </div>
}