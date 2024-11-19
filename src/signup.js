import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://farming-project-backend.onrender.com/useroutes/signup',
        {
          name,
          address,
          contact_number: contactNumber,
          password,
        }
      );

      if (response.status === 201) {
        toast.success('Signup successful!');
        navigate('/');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error(`Signup failed: ${error.response?.data?.message || error.message}`);
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center">
      <div className="form-container w-[400px] bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-green-600 font-semibold text-2xl mb-4">
          <span className="text-blue-600">Sign Up</span>
        </h2>
        <form id="signupForm" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 mb-4"
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 mb-4"
          />

          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 mb-4"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 mb-4"
          />

          <div className="flex justify-center">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">
              Sign Up
            </button>
          </div>
        </form>

        <div className="back-link text-center mt-4">
          <Link to="/login" className="text-green-600 hover:underline block mb-2">
            Login
          </Link>
          <Link to="/index" className="text-blue-600 hover:underline">
            Back to Main Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
