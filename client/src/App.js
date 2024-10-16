
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Cont from "./pages/Cont"
import Policy from "./pages/Policy";
import PagenotFound from "./pages/PagenotFound";


function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/cont" element={<Cont/>} />
    <Route path="/policy" element={<Policy/>} />
    <Route path="/pagenotFound" element={<PagenotFound/>} />
   </Routes>
   </>
      
    
  );
}

export default App;
