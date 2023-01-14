import {Navigate,Outlet} from 'react-router-dom'
import { isExpired, decodeToken } from "react-jwt";
function PrivateRoutAdmin() {
    const token=localStorage.getItem("token")
    const Decodtoken=decodeToken(token)
  return (
    (Decodtoken&&Decodtoken.Role==="Admin")?<Outlet/>:<Navigate to='/PageError'/>

  )
}

export default PrivateRoutAdmin