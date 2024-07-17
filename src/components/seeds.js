import React from 'react'
import { Link } from 'react-router-dom';
import rajma from './images/rajma_seeds.jpg'
import riceseed from './images/wheat_seeds.png'
import wheateseed from './images/wheat2.jpg'
import sproutseeds from './images/sproutseeds.jpg'
import chanaseed from './images/chanaseed.webp'
import mustardseed from './images/mustardseed.webp'
import tomatoimage from './images/Tomatocopy.webp'
import spinachimage from './images/spinachseeds.jpg'
import cucumberimage from './images/cucumbr_seeds.webp'
import carrotimage from './images/carrot_seeds.jpg'
import broccoliimage from './images/brocoli_seed.webp'
import radishimage from './images/radish_seed.jpg'
import lettuceimage from './images/lettuce_sees.webp'
import bellpepperimage from './images/bellpepper_seed.webp'
import zucchiniimage from './images/zurchini_seeds.webp'
import eggplantimage from './images/eggplant_seed.webp'



function Seeds() {

  const seedsData = [
    
      { id: 1, name: 'Rajma', price: '180/-', weight: '1kg', image: rajma, amazonLink: 'https://www.amazon.in/s?k=rajma+seeds' },
      { id: 2, name: 'Rice', price: '130/-', weight: '400g', image: riceseed, amazonLink: 'https://www.amazon.in/s?k=rice+seeds' },
      { id: 3, name: 'Wheat', price: '310/-', weight: '1kg', image: wheateseed, amazonLink: 'https://www.amazon.in/s?k=wheat+seeds' },
      { id: 4, name: 'Sprouts', price: '540/-', weight: '1kg', image: sproutseeds, amazonLink: 'https://www.amazon.in/s?k=sprout+seeds' },
      { id: 5, name: 'Chana', price: '110/-', weight: '500g', image: chanaseed, amazonLink: 'https://www.amazon.in/s?k=chana+seeds' },
      { id: 6, name: 'Mustard', price: '150/-', weight: '1kg', image: mustardseed, amazonLink: 'https://www.amazon.in/s?k=mustard+seeds' },
      { id: 7, name: 'Tomato', price: '200/-', weight: '500g', image: tomatoimage, amazonLink: 'https://www.amazon.in/s?k=tomato+seeds' },
      { id: 8, name: 'Spinach', price: '120/-', weight: '500g', image: spinachimage, amazonLink: 'https://www.amazon.in/s?k=spinach+seeds' },
      { id: 9, name: 'Cucumber', price: '180/-', weight: '1kg', image: cucumberimage, amazonLink: 'https://www.amazon.in/s?k=cucumber+seeds' },
      { id: 10, name: 'Carrot', price: '160/-', weight: '1kg', image: carrotimage, amazonLink: 'https://www.amazon.in/s?k=carrot+seeds' },
      { id: 11, name: 'Broccoli', price: '220/-', weight: '500g', image: broccoliimage, amazonLink: 'https://www.amazon.in/s?k=broccoli+seeds' },
      { id: 12, name: 'Radish', price: '130/-', weight: '500g', image: radishimage, amazonLink: 'https://www.amazon.in/s?k=radish+seeds' },
      { id: 13, name: 'Lettuce', price: '140/-', weight: '500g', image: lettuceimage, amazonLink: 'https://www.amazon.in/s?k=lettuce+seeds' },
      { id: 14, name: 'Bell Pepper', price: '250/-', weight: '500g', image: bellpepperimage, amazonLink: 'https://www.amazon.in/s?k=bell+pepper+seeds' },
      { id: 15, name: 'Zucchini', price: '170/-', weight: '500g', image: zucchiniimage, amazonLink: 'https://www.amazon.in/s?k=zucchini+seeds' },
      { id: 16, name: 'Eggplant', price: '190/-', weight: '500g', image: eggplantimage, amazonLink: 'https://www.amazon.in/s?k=eggplant+seeds' },
    ];
    



  return (
    <div className="seeds-container bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... ">
      {/* Header */}
      <nav className="text-center font-bold bg-green-500 text-5xl text-white py-10">
        Seeds
      </nav>

      {/* Main Content */}
      <main className="flex flex-wrap justify-center gap-5 p-5">
        {seedsData.map((seed) => (
          <div
            key={seed.id}
            className="seed-card w-[300px] rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-between bg-white transform hover:scale-105 transition duration-300 ease-in-out"
          >

            <img
              src={seed.image}
              alt={seed.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            <div className="seed-info  flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{seed.name}</h3>
              </div>
            </div>
            <div className="flex items-center justify-center mb-3  space-x-4 mt-2 ">
              <p className="text-gray-600">{seed.weight}</p>
              <p className="text-green-600 font-bold">₹{seed.price}</p>
            </div>

            {/* Buy Button */}
            <Link to={seed.amazonLink} className="w-full bg-green-600 text-center text-white py-2 px-4 rounded-b-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Buy
          </Link>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center font-bold bg-green-600 text-white text-base py-4 mt-12">
        <Link to="/index" className="text-white hover:underline transition-colors duration-300">
          Back
        </Link>
      </footer>
    </div>
  )
}

export default Seeds
