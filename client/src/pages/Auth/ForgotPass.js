// import React, { useState } from "react";
// import Layout from '../../componet/layout/layout'
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
// // import { useAuth } from "../../context/auth";

// const ForgotPass = () => {
//   const [email, setEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [question, setQuestion] = useState("");
//   // const [auth, setAuth] = useAuth();

//   const navigate = useNavigate();
//   // const location = useLocation();

//   // form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`/api/v1/auth/forgotpassword`, {
//         email,
//         newPassword,
//         question,
//       });
//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message)
//         navigate( "/log");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
//   return (
//     <Layout title={"Forgot Password - Worker App"}>
//         <div className="form-container " style={{ minHeight: "90vh" }}>
//         <form onSubmit={handleSubmit}>
//           <h4 className="title">Reset Password</h4>

//           <div className="mb-3">
//             <input
//               type="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Email "
//               required
//             />
//           </div>


//           <div className="mb-3">
//             <input
//               type="text"
//               autoFocus
//               value={question}
//               onChange={(e) => setQuestion(e.target.value)}
//               className="form-control"
//               id="exampleInputQuestion"
//               placeholder="Question "
//               required
//             />
//             </div>




          
//           <div className="mb-3">
//             <input
//               type=" password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Enter Your New Password"
//               required
//             />
//           </div>
//           {/* <div className="mb-3">
//             <button
//               type="button"
//               className="btn forgot-btn"
//               onClick={() => {
//                 navigate("/forget.password");
//               }}
//             >
//               Forgot Password
//             </button>
//           </div> */}

//           <button type="submit" className="btn btn-primary">
//            Reset
//           </button>
//         </form>
//       </div>
//     </Layout>
//   )
// }

// export default ForgotPass
