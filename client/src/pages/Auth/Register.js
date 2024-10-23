import React,{useState} from 'react'
import Layout from '../../componet/layout/layout'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";




const Register = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone , setPhone] = useState("");
    // const [Address , setAddresh] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/v1/auth/register",
            {name,
            email, 
            password, 
            phone
            // Address
          });
            if(res && res.data.success){
                toast.success( res.data &&  res.data.message)
                navigate("/login");
            }else{
              toast.error(res.data.message)  
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }

  return (
    <Layout title={"Register Worker-app"}>
    <div className='form-container'  style={{ minHeight: "90vh"}}>
        {/* <h1>Register Page</h1> */}
      <form onSubmit={handleSubmit}>
      <h4 className="title">REGISTER FORM</h4>
  <div className="mb-3">
    
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}
     className="form-control" id="exampleInputName1" placeholder='Enter Your name' />
   
  </div>
  <div className="mb-3">
    
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
    className="form-control" id="exampleInputEmail1"  placeholder='Email'/>
    
  </div>
  <div className="mb-3">
   
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
    className="form-control" id="exampleInputPassword1" placeholder='Password'/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    
    <input type="text" value={phone} className="form-control" onChange={(e) => setPhone(e.target.value)} id="exampleInputPhone" placeholder='Phone Number' />
    
  </div>
  {/* <div className="mb-3">
    
    <input type="text" value={Address} onChange={(e) => setAddresh(e.target.value)}
     className="form-control" id="exampleInputAddress" placeholder='Address' />
   
  </div> */}
  <button type="submit" className="btn btn-primary">
    Register</button>
</form>

    </div>
    </Layout>
  )
}

export default Register
