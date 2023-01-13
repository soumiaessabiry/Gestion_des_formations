import { FcReading,FcConferenceCall,FcDepartment} from "react-icons/fc";
import { HiOutlineLogout} from "react-icons/hi";
import { BsPersonPlusFill} from "react-icons/bs";
import Sidebar from "../sidebar";
import Navbar from "../Navbar";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
const bgg={'background':'#0a58ca',"color":"azure","borderRadius":"10px"}
const over={'overflow': 'auto'}
const icon={"fontSize": "35px","color":"brown"}
const iconBsP={"fontSize": "35px"}
const Employee=()=>{
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
            <Row className=" m-auto" style={bgg}>
                   <Navbar name="employee" iconBsP={iconBsP} />

            </Row>
          <Row className="  m-auto mt-3 bg-light text-dark ">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="p-2  w-100">
                <Table responsive="md">
                    <thead>
                        <tr  className="py-2" style={bgg}>
                            <th >First name</th>
                            <th >last name</th>
                            <th >email</th>
                            <th >phone</th>
                            <th >Organisme</th>
                            <th >Option</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        
                        </tr>
                    </tbody>
                </Table>
             </div>
            </div>
          </Row>
        </div>  
      </div>
         {/* modal */}
         <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="Ajouter text-dark" id="exampleModalLabel">Ajouter livreur </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-dark fw-bolder">
                    <form >
                        <div className="mb-3">
                            <label className="col-form-label fs-5">Nom de </label>
                            <input type="text" className="form-control p-2 fs-4" />

                        </div>
                        <div className="mb-3">

                            <label  className="col-form-label fs-5">Email  </label>
                            <input type="email" className="form-control p-2 fs-4"  />

                        </div>

                        <div className="mb-3">

                            <label  className="col-form-label fs-5">Password </label>
                            <input type="password" className="form-control p-2 fs-4"  />

                        </div>
                        <div className="modal-footer ">
                        <button type="button" className="btn btn-secondary fw-bolder p-3" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn p-3 fw-bolder text-white"  name="submit"  style={bgg}>Ajouter employee </button>
                    </div>
                    </form>
                </div>
              
                </div>
            </div>
        </div>
     </div>
    )

}
export default Employee

