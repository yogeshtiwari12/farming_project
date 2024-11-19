import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

function Logout() {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
    
     const response =  await axios.post('https://farming-backend-2ccy.onrender.com/useroutes/logout', {}, {
      withCredentials: true, 
      });
      
   if(response.status){
     toast.success('Logout successful');
     window.location.reload();

   }

      setTimeout(() => {
        navigate('/'); 
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
