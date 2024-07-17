import React from 'react';
import { Link } from 'react-router-dom';
// import ammoniumSulfate from './images/ammonium-sulfate.jpg';
import ammoniumSulfate from './images/ammonium-sulfate.jpg';
import dapFertilizer from './images/diAmmoniumPhosphateDAPfertiliser.jpg';
import mopFertilizer from './images/MuriateOfPotashMOPfertiliser.webp';
import npkFertilizer from './images/Npk-fertilizer-4.jpg';
import organicManure from './images/organicmanure.jpg';
import ureaFertilizer from './images/ureafertiliser.webp';

function Fertilizer() {
    const fertilizers = [
        { id: 1, name: 'Ammonium-sulfate', price: '250/-', weight: '500g', image: ammoniumSulfate },
        { id: 2, name: 'Di-Ammonium Phosphate ', price: '100/-', weight: '200g', image: dapFertilizer },
        { id: 3, name: 'Muriate Of Potash (MOP)', price: '340/-', weight: '850g', image: mopFertilizer },
        { id: 4, name: 'Npk-fertilizer-4', price: '600/-', weight: '1kg', image: npkFertilizer },
        { id: 5, name: 'Organic Manure', price: '200/-', weight: '1kg', image: organicManure },
        { id: 6, name: 'Urea Fertilizer', price: '50/-', weight: '1kg', image: ureaFertilizer },
    ];

    return (
        <div className="bg-gray-100 min-h-screen bg-gradient-to-r from-green-500 to-yellow-200">
            {/* Header */}
            <nav className="text-center font-bold bg-green-500 text-5xl text-white py-4">
                Fertilizer
            </nav>

            {/* Main Content */}
            <div className="flex flex-wrap justify-center gap-5 p-5">
                {fertilizers.map((fertilizer) => (
                    <div key={fertilizer.id} className="bg-white rounded-lg shadow-lg overflow-hidden w-72 hover:scale-105 hover:duration-300">
                        <img src={fertilizer.image} alt={fertilizer.name} className="w-full h-48 object-cover" />
                        <div className="p-4 flex flex-col justify-between h-44"> {/* Adjusted height */}
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">{fertilizer.name}</h2>
                                <div className="flex items-center mt-2 justify-center">
                                    <p className="text-gray-700">{fertilizer.price}</p>
                                    <p className="text-gray-700 mx-2">|</p> {/* Separating price and weight */}
                                    <p className="text-gray-700">{fertilizer.weight}</p>
                                </div>
                            </div>
                            <button className="mt-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                                Buy
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <nav className="text-center font-bold bg-green-600 text-white text-base py-4">
                <Link to="/" className="text-white hover:underline transition-colors duration-300">Back</Link>
            </nav>
        </div>
    );
}

export default Fertilizer;
