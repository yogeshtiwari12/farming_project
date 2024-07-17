import React from 'react';
import { Link } from 'react-router-dom';

import pesatlas from './images/pesatlas.jpg';
import pescarbine20 from './images/carbine24.jpg';
import pesdcon from './images/pesdcon.jpg';
import pesrefen from './images/pesrefen.webp';
import pestebucon from './images/pestebucon.jpg';
const Pesticides = () => {
  const pesticidesData = [
    {
      id: 1,
      image: pesatlas,
      alt: 'Atlas pesticide',
      name: 'Atlas',
      price: 180,
    },
    {
      id: 2,
      image: pescarbine20,
      alt: 'Carbine 20% pesticide',
      name: 'Carbine 20%',
      price: 130,
    },
    {
      id: 3,
      image: pesdcon,
      alt: 'D-con pesticide',
      name: 'D-con',
      price: 310,
    },
    {
      id: 4,
      image: pesrefen,
      alt: 'Refren pesticide',
      name: 'Refren',
      price: 540,
    },
    {
      id: 5,
      image: pestebucon,
      alt: 'Tebucon pesticide',
      name: 'Tebucon',
      price: 110,
    },
  ];

  return (
    <div className="pesticides-container bg-gray-100 min-h-screen">
      {/* Header */}
      <nav className="text-center font-bold bg-green-600 text-5xl text-white py-10">
        Pesticides
      </nav>

      {/* Main Content */}
      <main className="container  grid grid-cols-4  justify-center gap-5 p-5 mx-auto max-w-3/4">
        {pesticidesData.map((pesticide) => (
          <div
            key={pesticide.id}
            className="pesticide-card w-[290px] rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-between bg-white transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Pesticide Image */}
            <img
              src={pesticide.image}
              alt={pesticide.alt}
              className="w-1/2 h-44 mt-6 object-cover rounded-t-lg"
            />

            {/* Pesticide Information */}
            <div className="pesticide-info p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {pesticide.name}
                </h3>
              </div>
              <div className="flex items-center space-x-6 justify-between mt-auto">
                <p className="text-gray-600">₹{pesticide.price}</p>
                <button className="w-full bg-green-600 text-white py-1 mt-3 px-4 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center font-bold bg-green-600 text-white text-base py-4 mt-12">
        <Link to="/" className="text-white hover:underline transition-colors duration-300">
          Back
        </Link>
      </footer>
    </div>
  );
};

export default Pesticides;
