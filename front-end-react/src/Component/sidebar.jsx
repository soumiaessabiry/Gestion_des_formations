import { useState } from "react";
import { NavLink } from "react-router-dom";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const styleFc={ 'marginTop':' 15px','marginleft':'-15px', 'fontWeight': 'bolder','fontSize':'40px','color':'azure'}
const sid={'marginTop':"90px"}
const navlik={
    "textDecoration": 'none' ,
    "color":'azure',

}

const Sidebar=(props)=>{
    const baseurl="http://localhost:4166/api/auth/Logout"
    const navigate=useNavigate()
    const [isShown, setDisplay]=useState('true');
    const Titledispshow=(e)=>{
        setDisplay(!isShown)
    }
    const Logout=async()=>{
       await axios.get(baseurl)
        .then((Response)=>{
            localStorage.clear();
            window.location.replace("/login")

        })
        .catch((error)=>{
            console.log(error)

        })
        
    }
    return(
        <div className="position-relative p-2">
            <div className="position-absolute top-0 start-100 translate-middle pdashbor"><BsFillArrowRightCircleFill style={styleFc} id="menu" onClick={Titledispshow}/></div>
            <div>
               <div>
                    
                    <div className="mt-4 pdashbor"  style={{display: isShown ? 'block' : 'none'}}>
                        <h3 className="title text-center text-white" >Admin</h3>
                    </div>
               </div>
                <div className="d-grid gap-2 "  style={sid}>
                    <div >
                        <div  className="mt-5 pdashbor">
                            <NavLink to="/Dashbord" style={navlik}>
                                <p className="fw-bolder fs-5 title"  style={{display: isShown ? 'block' : 'none'}} >{props.Dashbord}</p>
                            </NavLink>
                        </div>
                        <div  className="mt-5 pdashbor">
                            <NavLink to="/Formation" style={navlik}>
                                <span>{props.iconNavLink1}</span>
                                <p className="fw-bolder fs-5 title"  style={{display: isShown ? 'block' : 'none'}} >{props.NavLink1}</p>
                            </NavLink>
                        </div>
                        <div  className=" pdashbor mt-5">
                            <NavLink to="/Employee"  style={navlik}>
                                <span>{props.iconNavLink2}</span>
                                 <p className="fw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}}>{props.NavLink2}</p>

                            </NavLink>
                        </div>
                        <div  className="mt-5 pdashbor">
                            <NavLink to="/Organisme"  style={navlik}>
                                <span>{props.iconNavLink3}</span>
                                <p className="fw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}}>{props.NavLink3}</p>
                            </NavLink>
                        </div>
                        <div  className="mt-5 pdashbor">
                            <button  className="btn " style={navlik} onClick={Logout}>
                                <span>{props.iconlogout}</span>
                                <p className="fw-bolder fs-5 title navlik2"  style={{display: isShown ? 'block' : 'none'}}>{props.logout}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Sidebar