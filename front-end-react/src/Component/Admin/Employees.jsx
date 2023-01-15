import { FcReading,FcConferenceCall,FcDepartment} from "react-icons/fc";
import { HiOutlineLogout} from "react-icons/hi";
import { BsPersonPlusFill} from "react-icons/bs";
import { AiFillEdit} from "react-icons/ai";
import { RiDeleteBin2Fill} from "react-icons/ri";
import Sidebar from "../sidebar";
import Navbar from "../Navbar";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import {useState,useEffect} from "react";
import {Modal} from 'react-bootstrap';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const bgg={'background':'#0a58ca',"color":"azure","borderRadius":"10px"}
const over={'overflow': 'auto'}
const icon={"fontSize": "35px","color":"brown"}
const iconBsP={"fontSize": "35px"}
const Employee=()=>{
    const baseUrl1="http://localhost:4166/api/organisme/AfficherOrganismes"
    const baseUrl2="http://localhost:4166/api/user/Ajouteremployee"
    const baseUrl3="http://localhost:4166/api/user/AllEmployee"
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[Organisme,setOrganisme]=useState([])

    //! ****Afficher organisme pour select****
    const AllOrganismes=async()=>{
        await axios.get(baseUrl1)
        .then((Response)=>{
            setOrganisme(Response.data.Organismes)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    //? *****Add employee****
    const [id_employe,setidemploye]=useState('')
    const [First_name,setFirstname]=useState('')
    const [Last_name,setLastname]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [password,setpassword]=useState('')
    const [id_organisme,setidorganisme]=useState('')
    const baseUrl4=`http://localhost:4166/api/user/UpdateEmployee/${id_employe}`

    const dataemploye={
        First_name,
        Last_name,
        email,
        phone,
        password,
        id_organisme
    }
    const AddEmployee=async(e)=>{
        e.preventDefault()
        await axios.post(baseUrl2,dataemploye)
        .then((Response)=>{
            toast.success('Add users success')
            window.location.reload(false); 
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    //! *****Afficher all Employee***
    const[Employee,setEmployee]=useState([])
        const AllEmployee=async()=>{
            await axios.get(baseUrl3)
           .then((Response)=>{
            setEmployee(Response.data)
           })
            .catch((err)=>{
                console.log(err)
            })

        }

//? ******updat employee*****
    const setemployedata = (e) => {
        setidemploye(e._id)
        setFirstname(e.First_name)
        setLastname(e.Last_name)
        setemail(e.email)
        setphone(e.phone)
        setidorganisme(e.id_organisme)
    }
    const dataupdate={
        First_name,
        Last_name,
        email,
        phone,
        id_organisme
    }
    const UpdatEmploye=async(e)=>{
        e.preventDefault()
        axios.put(baseUrl4,dataupdate)
        .then((Response)=>{
            toast.success('updat user  success')
            window.location.reload(false); 
        })
        .cath((err)=>{
            console.log(err)
        })
    }
//!delet employee 
const DeletEmploye=async(id)=>{
    axios.delete(`http://localhost:4166/api/user/Deletemploye/${id}`)
    .then((Response)=>{
            toast.success('delet success')
            window.location.reload(false);
        
    })
    .catch((err)=>{
        console.log(err)

    })
}
    useEffect(()=>{
        AllOrganismes()
        AllEmployee()
    },[])
    
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
                   <Navbar  handleShow={handleShow} iconBsP={iconBsP}  />

            </Row>
          <Row className="  m-auto mt-3 bg-light text-dark ">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="p-2  w-100">
                <Table responsive="md">
                    <thead>
                        <tr  className="py-2" style={bgg}>
                            <th >First name</th>
                            <th >last name</th>
                            <th >Role</th>
                            <th >email</th>
                            <th >phone</th>
                            <th >Organisme</th>
                            <th >Option</th>
                        </tr>
                    </thead>
                    <tbody>
                      {Employee.map((e)=>(
                          <tr key={e._id}>
                          {/* <td>{e._id}</td> */}
                          <td>{e.First_name}</td>
                          <td>{e.Last_name}</td>
                          <td>{e.Role}</td>
                          <td>{e.email}</td>
                          <td>{e.phone}</td>
                          <td>{e.id_organisme}</td>
                          <td>
                          <td style={{display:"flex"}}>
                          <button className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal"  ><AiFillEdit className="fs-3 text-success"onClick={() =>setemployedata(e)}  /></button>
                            <button className="btn"  ><RiDeleteBin2Fill className="fs-3 text-danger " onClick={()=>{if (window.confirm('Are you sure you wish to delete this Command  ?')) DeletEmploye(e._id)}}/></button> 
                          </td>
                          </td>
                          </tr>
                      ))}
                    </tbody>
                </Table>
             </div>
            </div>
          </Row>
        </div>  
      </div>
         {/* modal add */}
<Modal show={show} onHide={handleClose} size="md">
    <Modal.Header closeButton>
        <Modal.Title>Ajouter Employee</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form method="POST" onSubmit={AddEmployee}>
            <div className="mb-3">
                <label className="col-form-label fs-6">first name</label>
                <input type="text" name="First_name" className="form-control p-2 fs-4"  onChange={(e)=>{setFirstname(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label className="col-form-label fs-6">last name</label>
                <input type="text" name="Last_name" className="form-control p-2 fs-4" onChange={(e)=>{setLastname(e.target.value)}} />
            </div>
            
            <div className="mb-3">
                <label  className="col-form-label fs-6">Email  </label>
                <input type="email" name="email" className="form-control p-2 fs-4" onChange={(e)=>{setemail(e.target.value)}}  />
            </div>
            <div className="mb-3">
                <label  className="col-form-label fs-6">Phone  </label>
                <input type="number"name="phone" className="form-control p-2 fs-4" onChange={(e)=>{setphone(e.target.value)}} />
            </div>
            <div className="mb-3">
            <label  className="col-form-label fs-6">Organisme</label><br/>
            <select className="form-select form-select-lg mb-3" onChange={(e)=>{setidorganisme(e.target.value)}}>
                {Organisme.map((e) => (
                <option  value={e._id}>{e.name_organisme}</option>
                ))}
            </select>
            </div>
            <div className="mb-3">
                <label  className="col-form-label fs-6">Password </label>
                <input type="password" name="password" className="form-control p-2 fs-4" onChange={(e)=>{setpassword(e.target.value)}} />
            </div>
            <div className="modal-footer ">
            <button type="button" className="btn btn-secondary fw-bolder p-3" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
            <button type="submit" className="btn p-3 fw-bolder text-white"  name="submit"  style={bgg} >Ajouter employee </button>
        </div>
        </form>
    </Modal.Body>
</Modal>
{/* updat modal */}
<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modifier employee </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-dark">
      <form method="POST" onSubmit={UpdatEmploye}>
            <div className="mb-3">
                <label className="col-form-label fs-6">first name</label>
                <input type="text" name="First_name" className="form-control p-2 fs-4" value={First_name} onChange={(e)=>{setFirstname(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label className="col-form-label fs-6">last name</label>
                <input type="text" name="Last_name" className="form-control p-2 fs-4" value={Last_name} onChange={(e)=>{setLastname(e.target.value)}} />
            </div>
            
            <div className="mb-3">
                <label  className="col-form-label fs-6">Email  </label>
                <input type="email" name="email" className="form-control p-2 fs-4" value={email}onChange={(e)=>{setemail(e.target.value)}}  />
            </div>
            <div className="mb-3">
                <label  className="col-form-label fs-6">Phone  </label>
                <input type="number"name="phone" className="form-control p-2 fs-4"value={phone} onChange={(e)=>{setphone(e.target.value)}} />
            </div>
            <div className="mb-3">
            <label  className="col-form-label fs-6">Organisme</label><br/>
            <select className="form-select form-select-lg mb-3" value={id_organisme} onChange={(e)=>{setidorganisme(e.target.value)}}>
                {Organisme.map((e) => (
                <option  value={e._id}>{e.name_organisme}</option>
                ))}
            </select>
            </div>
          
            <div className="modal-footer ">
            <button type="button" className="btn btn-secondary fw-bolder p-3" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
            <button type="submit" className="btn p-3 fw-bolder text-white"  name="submit"  style={bgg} >Ajouter employee </button>
        </div>
        </form>
      </div>
       
      </div>
    </div>
  </div>
  <ToastContainer/>
  </div>
    )

}
export default Employee

