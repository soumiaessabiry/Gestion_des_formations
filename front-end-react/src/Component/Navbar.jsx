import { BsPersonPlusFill} from "react-icons/bs";
const Navbar=(props)=>{
return(
    <div className="d-flex bd-highlight mb-3">         
        <div className="ms-auto p-2 bd-highlight mt-2">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="console.log('Le lien a été cliqué.'); return false"><BsPersonPlusFill style={props.iconBsP}/></button>
        </div>
    </div>
)
}
export default Navbar