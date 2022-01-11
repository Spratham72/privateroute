import { Link } from "react-router-dom"

export const Nav=()=>{
    return <div style={{display:"flex", flexDirection:"row", gap:"10px", justifyContent:"space-around", marginBottom:"10%"}}>
    <Link to="/login"><button>login</button></Link>
    <Link to="/"><button>Homepage</button></Link>
    <Link to="/dashboard"><button>Dashboard</button></Link>
    <Link to="/setting"><button>Settings</button></Link>
   
    </div>
}