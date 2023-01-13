import { FcReading,FcConferenceCall,FcDepartment} from "react-icons/fc";
import { HiOutlineLogout} from "react-icons/hi";
import { BsPersonPlusFill} from "react-icons/bs";
import Sidebar from "../sidebar";
import Navbar from "../Navbar";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import {useState} from "react";
import {Modal} from 'react-bootstrap';
const bgg={'background':'#0a58ca',"color":"azure","borderRadius":"10px"}
const over={'overflow': 'auto'}
const icon={"fontSize": "35px","color":"brown"}
const iconBsP={"fontSize": "35px"}
const Organisme=()=>{
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
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
            <Navbar handleShow={handleShow} iconBsP={iconBsP}  />

            </Row>
          <Row className="  m-auto mt-3 bg-light text-dark ">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="p-2  w-100">
                <Table responsive="md">
                    <thead>
                        <tr  className="py-2" style={bgg}>
                          
                            <th >Name organisme</th>
                            <th >ville</th>
                            <th >Address</th>
                            <th >phone</th>
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
         <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton>
        <Modal.Title>Ajouter Organisme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form >
                <div className="mb-3">
                    <label className="col-form-label fs-6">Name organisme</label>
                    <input type="text" className="form-control p-2 fs-4" />
                </div>
                <div className="mb-3">
                    <label className="col-form-label fs-6">Vile</label>
                    <input type="text" className="form-control p-2 fs-4" />
                </div>
                <div className="mb-3">
                    <label  className="col-form-label fs-6">Address</label>
                    <input type="text" className="form-control p-2 fs-4"  />
                </div>
                <div className="mb-3">
                    <label  className="col-form-label fs-6">phone</label>
                    <input type="number" className="form-control p-2 fs-4"  />
                </div>
                <div className="modal-footer ">
                <button type="button" className="btn btn-secondary fw-bolder p-3" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                <button type="submit" className="btn p-3 fw-bolder text-white"  name="submit"  style={bgg} >Ajouter Organisme </button>
            </div>
            </form>
        </Modal.Body>
</Modal>
     </div>
    )

}
export default Organisme

