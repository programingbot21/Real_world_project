
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About" 
import Cont from "./pages/Cont"
import Policy from "./pages/Policy"
import PagenotFound from "./pages/PagenotFound"
import Register from "./pages/Auth/Register"
import Log from "./pages/Auth/Log"
import Dashboard from "./pages/user/Dashboard"
import PrivateRoute from "./componet/Routes/Private"
import AdminRoute from "./componet/Routes/AdminRoute"
import AdminDashboard from "./pages/Admin/AdminDashboard"
import CreateCate from "./pages/Admin/CreateCate"
import CreateProduct from "./pages/Admin/CreateProduct"
import User from "./pages/Admin/User"
import Oredr from "./pages/user/Oredr"
import Profile from "./pages/user/Profile"
import Product from "./pages/Admin/Product"

//  import ForgotPass from "./pages/Auth/ForgotPass"


  // import { ToastContainer } from 'react-toastify';

  // import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
   <>


   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/dashboard" element={<PrivateRoute/>} >
    <Route path="user" element={<Dashboard/>} />
    <Route path="user/order" element={<Oredr/>} />
    <Route path="user/profile" element={<Profile/>} />
    </Route>
    <Route path="/dashboard" element={<AdminRoute/>} >
    <Route path="admin" element={<AdminDashboard/>} />
    <Route path="admin/create-category" element={<CreateCate/>} />
    <Route path="admin/create-product" element={<CreateProduct/>} />
    <Route path="admin/product" element={<Product/>} />
    <Route path="admin/user" element={<User/>} />
    </Route>
    <Route path="/about" element={<About/>} />
    <Route path="/cont" element={<Cont/>} />
    <Route path="/register" element={<Register/>} />
    {/* <Route path="/forgotpassword" element={<ForgotPass/>} /> */}
   
     <Route path="/log" element={<Log/>} /> 
    <Route path="/policy" element={<Policy/>} />
    <Route path="*" element={<PagenotFound/>} />
    
   </Routes>
  
   </>
      
    
  );
}

export default App;
