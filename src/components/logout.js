import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authuser';
import toast from 'react-hot-toast';
import axios from 'axios';

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const token = authUser
      // console.log('Token:', token.token);

     const response =  await axios.post('http://localhost:3000/useroutes/logout', {}, {
        headers: {
          authorization: `${token.token}`
        }
      });
      
console.log('Api Response:', response.data)
      setAuthUser(null);
      localStorage.removeItem('Token');
      toast.success('Logout Successful');

      setTimeout(() => {
        navigate('/'); // Redirect to the login page or home page
      }, 2000);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      console.error('Logout failed', error.response ? error.response.data : error.message);
    }
  }

  return (
    <div className="px-2 pb-2 bg-red-500 text-white rounded-md">
      <button onClick={handleLogout} className="text-md">
        Logout
      </button>
    </div>
  );
}

export default Logout;
