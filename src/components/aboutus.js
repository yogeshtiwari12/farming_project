import React from 'react'
import { Link } from 'react-router-dom'

function Aboutus() {
  return (
    <div className="bg-gray-100 min-h-screen">
    {/* Header */}
    <nav className="text-center font-bold bg-green-600 text-5xl text-white py-14  hover:bg-green-700 hover:duration-300">
        About Us
    </nav>

    {/* Main Content */}
    <div className="flex justify-center items-center mt-8">
        <div className="bg-white text-gray-800 text-lg font-light w-4/5 p-6 rounded-lg shadow-lg text-center mt-10">
            <p>
                Welcome to Seeds & Soil! We're proud to introduce a unique approach to gardening and farming with our range of irrigation tools available for rent. In addition to offering premium quality seeds, fertilizers, and pesticides, we prioritize sourcing these products from local sellers who, unfortunately, may be unable to maintain their own shops. By patronizing Seeds & Soil, you're not only gaining access to top-notch supplies but also contributing to the livelihoods of these local shopkeepers. Each item undergoes meticulous examination by our team to ensure the highest standards of quality and effectiveness.
                <br /><br />
                At Seeds & Soil, we're committed to simplifying the purchasing process. Our website is designed to streamline communication, bypassing the need for traditional email exchanges. Instead, we prioritize direct interaction through phone numbers and SMS, ensuring swift and efficient service. If you're a seller looking to offload your irrigation tools or other agricultural equipment, don't hesitate to reach out to us using the contact details provided. Join us in cultivating a greener tomorrow while supporting local businesses – choose Seeds & Soil for all your gardening and farming needs!
            </p>
        </div>
    </div>

    {/* Footer */}
    <nav className="text-center font-bold bg-green-600 text-white text-base py-4 mt-12 hover:bg-green-700 hover:duration-300">
        <Link 
        to={"/index"}
         className="text-white hover:underline hover:underline transition-colors duration-300" >Back
        </Link> 

    </nav>
</div>
  )
}

export default Aboutus
