import { BsPersonPlusFill} from "react-icons/bs";
import {Modal, Button} from 'react-bootstrap';

const Navbar=(props)=>{
return(
    <div className="d-flex bd-highlight mb-3">         
        <div className="ms-auto p-2 bd-highlight mt-2">
    <Button className="nextButton" onClick={props.handleShow}>
         <BsPersonPlusFill style={props.iconBsP}/>
    </Button>
        </div>
    </div>
)
}
export default Navbar