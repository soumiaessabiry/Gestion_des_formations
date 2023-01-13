import { FcReading,FcConferenceCall,FcDepartment} from "react-icons/fc";
import { HiOutlineLogout} from "react-icons/hi";
import Sidebar from "../sidebar";
import Row from 'react-bootstrap/Row';
const bgg={'background':'#0a58ca'}
const over={'overflow': 'auto'}
const icon={"fontSize": "35px","color":"brown"}
const shadow = {
  boxShadow: '13px 8px 13px #0a58ca','border':'none'
};

const Dashbord=()=>{
    return(
     <div className="h-100 bg-white">
      <div className="d-flex h-100">
        <div className="p-4 " style={bgg}>
            <Sidebar 
              NavLink1="Formation"
              NavLink2="Employee"
              NavLink3="Organisme"
              logout="logout"
              iconNavLink1={<FcReading style={icon}/>}
              iconNavLink2={<FcConferenceCall style={icon}/>}
              iconNavLink3={<FcDepartment style={icon}/>}
              iconlogout={<HiOutlineLogout style={icon}/>}
            />
        </div>
        <div className=" p-1 w-100" style={over} >
          <Row className="  m-auto mt-3 bg-light text-dark">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col " >
                <div className="card" style={shadow}>
                  <div className="card-body">
                    <h5 className="card-title text-end"></h5>
                    <h5 className="card-title text-start fw-bold fs-3">Formations</h5>
                    <h5 className="card-title text-end">0</h5>
                  </div>
                </div>
              </div>
              <div className="col" >
                <div className="card" style={shadow}>
                  <div className="card-body">
                    <h5 className="card-title text-end"></h5>
                    <h5 className="card-title text-start fw-bold fs-3">Employees</h5>
                    <h5 className="card-title text-end">0</h5>
                  </div>
                </div>
              </div> <div className="col" >
                <div className="card" style={shadow}>
                  <div className="card-body">
                    <h5 className="card-title text-end"></h5>
                    <h5 className="card-title text-start fw-bold fs-3">Organisme</h5>
                    <h5 className="card-title text-end">0</h5>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>  
      </div>
     </div>
    )

}
export default Dashbord

