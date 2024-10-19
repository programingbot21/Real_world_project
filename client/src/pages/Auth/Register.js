import React,{useState} from 'react'
import Layout from '../../componet/layout/layout'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'


const Register = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone , setPhone] = useState("");
    const [Address , setAddresh] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/register",
            {name,
            email, 
            password, 
            phone, 
            Address});
            if(res.data.success){
                toast.success(res.data.message)
                navigate('/login');
            }else{
              toast.error(res.data.message)  
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }

  return (
    <Layout title={"Register Worker-app"}>
    <div className='register'>
        <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
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
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
    </Layout>
  )
}

export default Register
