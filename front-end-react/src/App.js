import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../src/Component/Login'
import Dashbord from '../src/Component/Admin/DashbordAdmin'
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
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashbord" element={<Dashbord />} />
          </Routes>
       </BrowserRouter>
    
    </div>
  );
}

export default App;
