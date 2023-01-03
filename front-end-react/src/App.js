import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../src/Component/Login'
import './App.css';

function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
          </Routes>
       </BrowserRouter>
    
    </>
  );
}

export default App;
