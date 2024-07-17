import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authuser'; // Adjust the import path based on your project structure

function Login() {
  const navigate = useNavigate();
  const [, setAuthUser] = useAuth(); // Get the authentication state setter
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://farming-project-backend.onrender.com/useroutes/login', {
        name,
        password
      });

      if (response.data) {
        localStorage.setItem("User", JSON.stringify(response.data));
        setAuthUser(response.data); // ye smj ni aaya kyu kiya
        navigate('/'); 
        toast.success("Login successful");
      }

    } catch (error) {
      console.error("Login failed:", error.message);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center">
      <div className="form-container w-[400px] h-[400px] bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-green-600 font-semibold text-2xl mb-4">Login</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
          />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full px-3 py-2 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
          />
          <div className="flex justify-center mt-6">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">Login</button>
          </div>
        </form>
        <div className="back-link text-center mt-4">
          <a href="/index" className="text-blue-600 hover:underline">Back to Main Page</a>
        </div>
        <div className="back-link text-center mt-4">
          <a href="/loginsignup">Don't have an account? <span className="text-blue-600 hover:underline">Signup</span></a>
        </div>
      </div>
    </div>
  );
}

export default Login;
