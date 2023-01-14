import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../src/Component/Login'
import Dashbord from '../src/Component/Admin/DashbordAdmin'
import Employee from '../src/Component/Admin/Employees'
import Formation from '../src/Component/Admin/Formation'
import Organisme from '../src/Component/Admin/Organismes'
import PageError from '../src/Component/404'
import PrivateRoutAdmin from "../src/Component/PrivateRoute/PrivateRoutAdmin"
import './App.css';
const myStyle = {
  height: "100vh",
  overflow: "hidden",
};
function App() {
  return (
    <div style={myStyle} className="main">
       <BrowserRouter>
          <Routes>
            {/*public route */}
            <Route path="/Login" element={<Login />} />
            <Route path="/PageError" element={<PageError/>} />

            {/*Admin route */}
            <Route element={<PrivateRoutAdmin/>}>
                <Route path="/Dashbord" element={<Dashbord />} />
                <Route path="/Employee" element={<Employee/>} />
                <Route path="/Formation" element={<Formation/>} />
                <Route path="/Organisme" element={<Organisme/>} />
            </Route>
            
            {/*employee route */}

          </Routes>
       </BrowserRouter>
    
    </div>
  );
}

export default App;
