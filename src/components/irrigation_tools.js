import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dripirrigation from './images/dripirrigation.jpg';
import furrowirrigation from './images/furrowirrigation.jpg';
import centerPivot from './images/center-pivot-2.webp';
import sprinkler from './images/sprinkler.jpg';
import subsurfaceIrrigation from './images/subsurface irrigation.jpg';

function IrrigationTools() {
  const [selectedSystem, setSelectedSystem] = useState(null);

  const irrigationSystems = [
    {
      type: "Drip system",
      steps: [
        { step: 1, description: "Planning and Design", details: ["Measure the area and plan the layout of your plants and tubing."] },
        { step: 2, description: "Gathering Materials", details: ["Get a drip irrigation kit or individual components and tools."] },
        { step: 3, description: "Connecting to Water Source", details: ["Attach a backflow preventer, filter, pressure regulator, and optional timer to the water source."] },
        { step: 4, description: "Laying Out the Mainline Tubing", details: ["Lay out and cut the mainline tubing. Secure with stakes or clamps."] },
        { step: 5, description: "Installing Emitters", details: ["Punch holes in the tubing, insert emitters, and place them near plant bases."] },
        { step: 6, description: "Sealing the System", details: ["Seal the tubing ends and check all connections for leaks."] },
        { step: 7, description: "Testing the System", details: ["Turn on the water, check for leaks, and adjust emitters as needed."] },
        { step: 8, description: "Maintenance", details: ["Regularly inspect, clean the filter, and adjust emitters."] }
      ],
      tips: [
        "Avoid Overwatering: Adjust watering schedules based on soil moisture.",
        "Mulch: Use mulch to retain moisture and reduce evaporation.",
        "Winterization: Drain and store the system in winter to prevent freeze damage."
      ]
    },
    {
      type: "Furrow Irrigation",
      steps: [
        { step: 1, description: "Planning and Design", details: ["Plan the layout of furrows based on the slope and soil type."] },
        { step: 2, description: "Preparing the Field", details: ["Level the field and create furrows."] },
        { step: 3, description: "Connecting to Water Source", details: ["Set up a water source with a pump or gravity-fed system."] },
        { step: 4, description: "Watering the Furrows", details: ["Open the water source and allow water to flow into the furrows."] },
        { step: 5, description: "Monitoring", details: ["Monitor the water flow to ensure even distribution."] },
        { step: 6, description: "Maintenance", details: ["Regularly inspect and repair furrows."] }
      ],
      tips: [
        "Avoid over-irrigation to prevent soil erosion.",
        "Ensure proper field leveling to avoid waterlogging."
      ]
    },
    {
      type: "Center-Pivot Irrigation",
      steps: [
        { step: 1, description: "Planning and Design", details: ["Design the pivot system layout based on the field size and shape."] },
        { step: 2, description: "Gathering Materials", details: ["Acquire a center-pivot system, pipes, and necessary connectors."] },
        { step: 3, description: "Setting Up the Pivot", details: ["Install the pivot system at the center of the field."] },
        { step: 4, description: "Connecting to Water Source", details: ["Connect the pivot system to a reliable water source."] },
        { step: 5, description: "Operating the System", details: ["Start the pivot system and adjust the sprinkler heads as needed."] },
        { step: 6, description: "Maintenance", details: ["Regularly inspect the pivot system for leaks and mechanical issues."] }
      ],
      tips: [
        "Ensure the pivot system is properly anchored to avoid tipping.",
        "Regularly check and adjust sprinkler heads for even water distribution."
      ]
    },
    {
      type: "Sprinkler System",
      steps: [
        { step: 1, description: "Planning and Design", details: ["Measure the area and determine the placement of sprinklers."] },
        { step: 2, description: "Gathering Materials", details: ["Get sprinkler heads, pipes, connectors, and a timer."] },
        { step: 3, description: "Connecting to Water Source", details: ["Attach a backflow preventer and pressure regulator to the water source."] },
        { step: 4, description: "Laying Out the Pipes", details: ["Lay out and connect pipes according to your plan."] },
        { step: 5, description: "Installing Sprinkler Heads", details: ["Attach sprinkler heads to the pipes at the planned locations."] },
        { step: 6, description: "Testing the System", details: ["Turn on the water, check for leaks, and adjust sprinklers as needed."] },
        { step: 7, description: "Maintenance", details: ["Regularly inspect and clean sprinkler heads."] }
      ],
      tips: [
        "Adjust sprinklers to avoid watering sidewalks and driveways.",
        "Use a timer to automate watering schedules."
      ]
    },
    {
      type: "Subsurface Irrigation",
      steps: [
        { step: 1, description: "Planning and Design", details: ["Plan the layout of subsurface pipes based on the root depth and soil type."] },
        { step: 2, description: "Gathering Materials", details: ["Get subsurface pipes, emitters, connectors, and a filter."] },
        { step: 3, description: "Installing the Pipes", details: ["Dig trenches and lay the subsurface pipes."] },
        { step: 4, description: "Connecting to Water Source", details: ["Connect the subsurface system to a water source with a filter and pressure regulator."] },
        { step: 5, description: "Sealing and Testing", details: ["Seal the system, turn on the water, and check for leaks."] },
        { step: 6, description: "Maintenance", details: ["Regularly inspect and flush the system to prevent clogs."] }
      ],
      tips: [
        "Ensure proper installation depth to reach plant roots.",
        "Use a filter to prevent debris from clogging the system."
      ]
    }
  ];

  const toolsData = [
    { id: 1, name: 'Drip system', image: dripirrigation },
    { id: 2, name: 'Furrow irrigation', image: furrowirrigation },
    { id: 3, name: 'Center-pivot', image: centerPivot },
    { id: 4, name: 'Sprinkler system', image: sprinkler },
    { id: 5, name: 'Subsurface irrigation', image: subsurfaceIrrigation },
  ];

  return (
<div className="min-h-screen" style={{background: "radial-gradient(circle, rgba(200,189,208,1) 0%, rgba(29,253,100,1) 50%, rgba(252,176,69,1) 100%)"}}>
{/* Header */}
      <nav className="text-center font-bold bg-green-600 text-5xl text-white py-4">
        Irrigational System
      </nav>

      {/* Main Content */}
      <div className="flex grid grid-cols-4 justify-center align-items-center gap-5 p-5">
        {toolsData.map((tool) => (
          <div
            key={tool.id}
            className="seed-card w-80 rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-between bg-white transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Seed Image */}
            <img
              src={tool.image}
              alt={tool.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Seed Information */}
            <div className="seed-info p-4 flex flex-col justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
            </div>

            {/* Procedure Button */}
            <div className="w-full flex flex-col items-center">
              <button
                className="w-full py-2 bg-green-600 text-white px-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                onClick={() => setSelectedSystem(tool.name)}
              >
                Procedure
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Procedure Display */}
      {selectedSystem && (
  <div className="flex justify-center items-center min-h-screen p-5 bg-gray-100">
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">{selectedSystem} Procedure</h2>
      <div>
        {irrigationSystems
          .filter((system) => system.type.toLowerCase().includes(selectedSystem.toLowerCase()))
          .map((system, index) => (
            <div key={index} className="mb-6">
              <table className="min-w-full bg-white border border-3 overflow-hidden shadow-sm">
                <thead className="bg-gray-200 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border">Step</th>
                    <th className="px-4 py-2 border">Description</th>
                    <th className="px-4 py-2 border">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {system.steps.map((step) => (
                    <tr key={step.step} className="border-t">
                      <td className="px-4 py-2 border">{step.step}</td>
                      <td className="px-4 py-2 border">{step.description}</td>
                      <td className="px-4 py-2 border">{step.details.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 className="text-xl font-semibold mt-4 text-center">Tips</h3>
              <ul className="list-disc list-inside mt-2">
                {system.tips.map((tip, tipIndex) => (
                  <li className="border border-gray-300 rounded-lg p-2 mb-2 list-none" key={tipIndex}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <button
          className="mt-4 py-2 px-4 bg-red-600 text-white hover:bg-red-700 rounded"
          onClick={() => setSelectedSystem(null)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


      {/* Footer */}
      <nav className="text-center font-bold bg-green-600 text-white text-base py-4">
        <Link to="/" className="text-white hover:underline transition-colors duration-300">
          Back
        </Link>
      </nav>
    </div>
  );
}

export default IrrigationTools;
