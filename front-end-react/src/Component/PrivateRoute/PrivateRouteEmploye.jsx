import {Navigate,Outlet} from 'react-router-dom'
import { isExpired, decodeToken } from "react-jwt";

function PrivateRouteEmploye() {
    const token=localStorage.getItem('token')
    const DecodToken=decodeToken(token)
  return (
    (DecodToken&&DecodToken.Role==="employe")?<Outlet/>:<Navigate to='/PageError'/>
  )
}

export default PrivateRouteEmploye