import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authuser';
import toast from 'react-hot-toast';

function Logout() {
  const [authuser, setautheruser] = useAuth();
  const navigate = useNavigate();

  function handlelogout() {
    try {
      setautheruser({
        ...authuser,
        user: null
      });
      localStorage.removeItem("User");
      toast.success("Logout Successfully");

      setTimeout(() => {
        navigate('/login'); // Redirect to the login page
      }, 2000);
    } catch (error) {
      toast.error("Error" + error.message);
      setTimeout(() => {}, 3000);
    }
  }

  return (
    <div className="px-4 py-2 bg-red-500 text-white rounded-xl">
      <button onClick={handlelogout}>Logout</button>
    </div>
  );
}

export default Logout;
