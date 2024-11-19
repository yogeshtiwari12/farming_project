import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://farming-backend-2ccy.onrender.com/useroutes/login',
        { name, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        navigate('/'); 
       window.location.reload();
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center">
      <div className="form-container w-[400px] h-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-green-600 font-semibold text-2xl mb-4">Login</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-label="Enter your name"
            className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Enter your password"
            className="block w-full px-3 py-2 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
          />
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link to="/index" className="text-blue-600 hover:underline">Back to Main Page</Link>
        </div>
        <div className="text-center mt-4">
          <Link to="/loginsignup" className="text-blue-600 hover:underline">
            Don't have an account? <span className="font-semibold">Signup</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
