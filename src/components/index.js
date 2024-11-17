import React, { useEffect, useState } from 'react';
import aboutuslogo from './images/aboutuslogoo.jpg';
import seedlogo from './images/seedlogo.jpg';
import irrigationlogoo from './images/irrigationlogo.png';
import fertilizerlogoo from './images/fertilizerlogoo.jpg';
import pesticideslogoo from './images/pesticideslogoo.png';
import loginlogoo from './images/loginlogoo.jpg';
import { Link } from 'react-router-dom';

import Logout from '../components/logout';
import kisanpic2 from '../components/images/kisanpic2.jpg';
// import kisanpic2 from './images/kisanpic2.jpg';
import { useAuth } from '../components/authuser';
import field from '../components/images/field.jpg';


function Index() {
  const [time, setTime] = useState(new Date());
  const [authUser] = useAuth()

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
<div
  className="bg-gray-100 min-h-screen flex flex-col"
  style={{
    backgroundImage: `url(${field})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
  }}
>      <nav className="bg-green-700 text-white text-center font-bold text-4xl p-6 hover:bg-green-800 transition duration-300 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-center mx-10 md:text-left">Seeds & Soil</h2>
          </div>

          <div className="flex justify-center mt-10">
       
            {authUser ? ( <Logout/>):(<Link to={"/login"} ><div className="bg-blue-500 px-3 py-2 rounded-md">Login</div></Link> ) }
            
      </div>
          <div className="hidden md:block justify-center md:justify-end">
            <div className="bg-green-700 text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl mx-10 font-semibold mb-2">
                {time.toLocaleDateString()}
              </div>
              <div className="text-2xl font-bold">
                {time.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-wrap justify-center md:mt-28">
        <div className="p-5 m-5 text-center transform transition-transform duration-300 hover:scale-105">
          <Link to="/aboutus">
            <img src={aboutuslogo} alt="About Us" className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-2 border-4 border-green-700 p-1 shadow-md" />
            <h3 className="text-sm md:text-lg font-semibold text-white">About Us</h3>
          </Link>
        </div>

        <div className="p-5 m-5 text-center transform transition-transform duration-300 hover:scale-105">
          <Link to="/seeds">
            <img src={seedlogo} alt="Seeds" className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-2 border-4 border-green-700 p-1 shadow-md" />
            <h3 className="text-sm md:text-lg font-semibold text-white">Seeds</h3>
          </Link>
        </div>

        <div className="p-5 m-5 text-center transform transition-transform duration-300 hover:scale-105">
          <Link to="/irrigation" className="flex flex-col items-center no-underline">
            <img src={irrigationlogoo} alt="Irrigation Tools" className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-2 border-4 border-green-700 p-1 shadow-md" />
            <h3 className="text-sm md:text-lg font-semibold text-white">Irrigation Tools</h3>
          </Link>
        </div>

        <div className="p-5 m-5 text-center transform transition-transform duration-300 hover:scale-105">
          <Link to="/fertilizer" className="flex flex-col items-center no-underline">
            <img src={fertilizerlogoo} alt="Fertilizers" className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-2 border-4 border-green-700 p-1 shadow-md" />
            <h3 className="text-sm md:text-lg font-semibold text-white">Fertilizers</h3>
          </Link>
        </div>

        <div className="p-5 m-5 text-center transform transition-transform duration-300 hover:scale-105">
          <Link to="/pesticide" className="flex flex-col items-center no-underline">
            <img src={pesticideslogoo} alt="Pesticides" className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-2 border-4 border-green-700 p-1 shadow-md" />
            <h3 className="text-sm md:text-lg font-semibold text-white">Pesticides</h3>
          </Link>
        </div>

        <div className="p-5 m-5 text-center transform transition-transform duration-300 hover:scale-105">
          <Link to="/loginsignup" className="flex flex-col items-center no-underline">
            <img src={loginlogoo} alt="Login/Sign up" className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-2 border-4 border-green-700 p-1 shadow-md" />
            <h3 className="text-sm md:text-lg font-semibold text-white">Login/Sign up</h3>
          </Link>
        </div>

        <div className="p-5 m-5 text-center transform transition-transform duration-300 hover:scale-105">
          <Link to="/kisan" className="flex flex-col items-center no-underline">
            <img src={kisanpic2} alt="Login/Sign up" className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-2 border-4 border-green-700 p-1 shadow-md" />
            <h3 className="text-sm md:text-lg font-semibold text-white">Kisan help</h3>
          </Link>
        </div>
      </div>

     
    </div>
  );
}

export default Index;
