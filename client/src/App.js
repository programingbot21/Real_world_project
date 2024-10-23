
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About" 
import Cont from "./pages/Cont"
import Policy from "./pages/Policy"
import PagenotFound from "./pages/PagenotFound"
import Register from "./pages/Auth/Register"
import Log from "./pages/Auth/Log"

  // import { ToastContainer } from 'react-toastify';

  // import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
   <>


   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/cont" element={<Cont/>} />
    <Route path="/register" element={<Register/>} />
     <Route path="/log" element={<Log/>} /> 
    <Route path="/policy" element={<Policy/>} />
    <Route path="*" element={<PagenotFound/>} />
    
   </Routes>
  
   </>
      
    
  );
}

export default App;
