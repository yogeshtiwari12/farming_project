import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from './components/authuser';
// import { json } from 'stream/consumers';

function Signup() {
  // const location = useLocation();
  const navigate = useNavigate();
  // const from  = location.state?.from?.pathname || "/"

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [contact_number, setContact_number] = useState('');
  const [password, setPassword] = useState('');
  const [, setAuthUser] = useAuth() // Get the authentication state setter



const onSubmit= async(e) => {
e.preventDefault();

try {
  // https://farming-project-backend.onrender.com/useroutes/signup
  const response = await axios.post('https://farming-backend-2ccy.onrender.com/useroutes/signup',{

  name,
  address,
  contact_number,
  password,
  
  })

  if(response.status === 201 && response.data.token) {
    // toast.success("Signup success")
    setAuthUser(response.data); // ye smj ni aaya kyu kiya
        navigate('/'); 
        toast.success("Signup successful");
  }
  localStorage.getItem("Token : "+JSON.stringify(response.data.token));
  setAuthUser(response.data);
 
} catch (error) {
  toast.error("Signup failed",error);
  console.log("Error",error)

}

  }

  return (
    <div className="bg-green-200 min-h-screen  flex items-center justify-center">
      <div className="form-container w-[400px] bg-white p-8 rounded-lg shadow-md">
        
        <h2 className="text-center text-green-600 font-semibold text-2xl mb-4"> <span className="text-blue-600">Sign Up</span></h2>
        <form id="loginForm" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" 
          value={name}
          onChange={(e)=>setName(e.target.value)}

          required 
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 mb-4" />

          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" 

          value={address}
           onChange={(e)=>setAddress(e.target.value)}
          required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 mb-4" />

          <label htmlFor="contact">Contact Number</label>
          <input type="tel" id="contact" name="contact" 
          value={contact_number}
          onChange={(e)=>setContact_number(e.target.value)}
          required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 mb-4" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 mb-4" />



<div className="flex  justify-center"> 

<button className="bg-green-600 text-white px-4 py-2 rounded-md " >Sign up</button>
</div>



{/* </div> */}


        </form>

        <div className="back-link text-center mt-4">
        <Link to={"/login"} className="text-green-600 hover:underline block mb-2">Login

        
        </Link>
          <a href="/index" className="text-blue-600 hover:underline">Back to Main Page</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
