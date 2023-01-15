import { FcReading,FcConferenceCall,FcDepartment} from "react-icons/fc";
import { HiOutlineLogout} from "react-icons/hi";
import { RiDeleteBin2Fill} from "react-icons/ri";
import { AiFillEdit} from "react-icons/ai";
import Sidebar from "../sidebar";
import Navbar from "../Navbar";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import {useState ,useEffect} from "react";
import axios from "axios";
import {Modal} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const bgg={'background':'#0a58ca',"color":"azure","borderRadius":"10px"}
const over={'overflow': 'auto'}
const icon={"fontSize": "35px","color":"brown"}
const iconBsP={"fontSize": "35px"}

const Formation=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const baseUrl1="http://localhost:4166/api/formation/AjouterFormation"
    const baseUrl2="http://localhost:4166/api/formation/Afficheformations"
    const [id_formation,setidformation]=useState("")
    const [Name_Formation,setFormation]=useState("")
    const [image,setimage]=useState("")
    const [Date_debut,setDatedebut]=useState("")
    const [Date_Fin,setDateFin]=useState("")
    const [Desciption,setDesciption]=useState("")
    const [Allformations,setAllformations]=useState([])
    const formData = new FormData();
        formData.append('Name_Formation',Name_Formation)
        formData.append('image', image)
        formData.append('Date_debut',Date_debut)
        formData.append('Date_Fin', Date_Fin)
        formData.append('Desciption',Desciption)
//!Ajouter formation 
    const AjouterFormation=async(e)=>{
        e.preventDefault()
        await axios.post(baseUrl1,formData)
        .then((Response)=>{
            toast.success('Ajouter formation avec success')
            window.location.reload(false);
        })
        .cath((err)=>{
            console.log(err)
        })
    }
//!Afficher formation 
const AllFormations=async()=>{
    axios.get(baseUrl2)
    .then((Response)=>{
        setAllformations(Response.data.All_formations)
    })
    .catch((err)=>{
        console.log(err)
    })
}
//! update formation 
const setformationdata=(e)=>{
    setidformation(e._id)
    setFormation(e.Name_Formation)
    setimage(e.image)
    setDatedebut(e.Date_debut)
    setDateFin(e.Date_Fin)
    setDesciption(e.Desciption)
}
const formationdataupdate = new FormData();
formationdataupdate.append('Name_Formation',Name_Formation)
formationdataupdate.append('image', image)
formationdataupdate.append('Date_debut',Date_debut)
formationdataupdate.append('Date_Fin', Date_Fin)
formationdataupdate.append('Desciption',Desciption)
const UpdateFormation=async(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:4166/api/formation/Updateformation/${id_formation}`,formationdataupdate)
    .then((Response)=>{
        toast.success('Upadate formation avec success')
        window.location.reload(false);    })
    .catch((err)=>{
        console.log(err)
    })
}
useEffect(()=>{
    AllFormations()
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
                <Navbar handleShow={handleShow} iconBsP={iconBsP}  />

        </Row>
        <Row className="  m-auto mt-3 bg-light text-dark ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="p-2  w-100">
            <Table responsive="md">
                <thead>
                    <tr  className="py-2" style={bgg}>
                        <th >Name Formation</th>
                        <th >image</th>
                        <th >Date_debut</th>
                        <th >Date_Fin</th>
                        <th >Desciption</th>
                        <th >Option</th>                        
                    </tr>
                </thead>
                <tbody>
                {Allformations.map((e)=>(
                        <tr key={e._id}>
                        <td>{e.Name_Formation}</td>
                        <td>

                        <img width="80" height="70" src={`http://localhost:4166/public/${e.image}`}  />
                        </td>
                        <td>{e.Date_debut}</td>
                        <td>{e.Date_Fin}</td>
                        <td>{e.Desciption}</td>
                        <td className="" style={{display:"flex",padding: "1.5rem 0.5rem"}}>
                            <button className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setformationdata(e)}} ><AiFillEdit className="fs-3 text-success" /></button>
                            <button className="btn"  ><RiDeleteBin2Fill className="fs-3 text-danger " /></button> 
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
        {/* modal */}
    <Modal show={show} onHide={handleClose} size="md">
    <Modal.Header closeButton>
            <Modal.Title>Ajouter Formation</Modal.Title>
    </Modal.Header>
        <Modal.Body>
            <form method="POST" onSubmit={AjouterFormation} encType="multipart/form-data">
                <div className="mb-3">
                    <label className="col-form-label fs-6">Name Formation</label>
                    <input type="text" name="Name_Formation" onChange={(e)=>{setFormation(e.target.value)}} className="form-control p-2 fs-4" />
                </div>
                <div className="mb-3">
                    <label className="col-form-label fs-6">Image</label>
                    <input type="file"  name="image" onChange={(e)=>{setimage(e.target.files[0])}} className="form-control p-2 fs-4" />
                </div>
                <div className="mb-3">
                    <label  className="col-form-label fs-6">Date debut  </label>
                    <input type="date"  name="Date_debut" onChange={(e)=>{setDatedebut(e.target.value)}} className="form-control p-2 fs-4"  />
                </div>
                <div className="mb-3">
                    <label  className="col-form-label fs-6">Date fin  </label>
                    <input type="date" name="Date_fin" onChange={(e)=>{setDateFin(e.target.value)}}className="form-control p-2 fs-4"  />
                </div>
                <div className="mb-3">
                        <label  className="col-form-label fs-6">Desciption</label>
                    <textarea name="Desciption"  onChange={(e)=>{setDesciption(e.target.value)}}  cols="45" rows="4"></textarea>
                </div>

                <div className="modal-footer ">
                <button type="button" className="btn btn-secondary fw-bolder p-3" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                <button type="submit" className="btn p-3 fw-bolder text-white"  name="submit"  style={bgg} >Ajouter Formation </button>
            </div>
            </form>
        </Modal.Body>
    </Modal>
    <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Formation </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
            <div className="modal-body text-dark">
            <form method="POST" onSubmit={UpdateFormation} encType="multipart/form-data">
                <div className="mb-3">
                    <label className="col-form-label fs-6">Name Formation</label>
                    <input type="text" name="Name_Formation" value={Name_Formation} onChange={(e)=>{setFormation(e.target.value)}} className="form-control p-2 fs-4" />
                </div>
                <div className="mb-3">
                    <label className="col-form-label fs-6">Image</label>
                    <input type="file"  name="image" value={""} onChange={(e)=>{setimage(e.target.files[0])}} className="form-control p-2 fs-4" />
                </div>
                <div className="mb-3">
                    <label  className="col-form-label fs-6">Date debut  </label>
                    <input type="date"  name="Date_debut" value={Date_debut} onChange={(e)=>{setDatedebut(e.target.value)}} className="form-control p-2 fs-4"  />
                </div>
                <div className="mb-3">
                    <label  className="col-form-label fs-6">Date fin  </label>
                    <input type="date" name="Date_fin" value={Date_Fin} onChange={(e)=>{setDateFin(e.target.value)}}className="form-control p-2 fs-4"  />
                </div>
                <div className="mb-3">
                        <label  className="col-form-label fs-6">Desciption</label>
                    <textarea name="Desciption" value={Desciption} onChange={(e)=>{setDesciption(e.target.value)}}  cols="45" rows="4"></textarea>
                </div>

                <div className="modal-footer ">
                <button type="button" className="btn btn-secondary fw-bolder p-3" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                <button type="submit" className="btn p-3 fw-bolder text-white"  name="submit"  style={bgg} >Update Formation </button>
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
export default Formation

