import React from 'react'

function Irrigation_procedure() {
    {
       const  irrigationSystems =  [
          {
            "type": "Drip Irrigation",
            "steps": [
              { "step": 1, "description": "Planning and Design", "details": ["Measure the area and plan the layout of your plants and tubing."] },
              { "step": 2, "description": "Gathering Materials", "details": ["Get a drip irrigation kit or individual components and tools."] },
              { "step": 3, "description": "Connecting to Water Source", "details": ["Attach a backflow preventer, filter, pressure regulator, and optional timer to the water source."] },
              { "step": 4, "description": "Laying Out the Mainline Tubing", "details": ["Lay out and cut the mainline tubing. Secure with stakes or clamps."] },
              { "step": 5, "description": "Installing Emitters", "details": ["Punch holes in the tubing, insert emitters, and place them near plant bases."] },
              { "step": 6, "description": "Sealing the System", "details": ["Seal the tubing ends and check all connections for leaks."] },
              { "step": 7, "description": "Testing the System", "details": ["Turn on the water, check for leaks, and adjust emitters as needed."] },
              { "step": 8, "description": "Maintenance", "details": ["Regularly inspect, clean the filter, and adjust emitters."] }
            ],
            "tips": [
              "Avoid Overwatering: Adjust watering schedules based on soil moisture.",
              "Mulch: Use mulch to retain moisture and reduce evaporation.",
              "Winterization: Drain and store the system in winter to prevent freeze damage."
            ]
          },
          {
            "type": "Furrow Irrigation",
            "steps": [
              { "step": 1, "description": "Planning and Design", "details": ["Plan the layout of furrows based on the slope and soil type."] },
              { "step": 2, "description": "Preparing the Field", "details": ["Level the field and create furrows."] },
              { "step": 3, "description": "Connecting to Water Source", "details": ["Set up a water source with a pump or gravity-fed system."] },
              { "step": 4, "description": "Watering the Furrows", "details": ["Open the water source and allow water to flow into the furrows."] },
              { "step": 5, "description": "Monitoring", "details": ["Monitor the water flow to ensure even distribution."] },
              { "step": 6, "description": "Maintenance", "details": ["Regularly inspect and repair furrows."] }
            ],
            "tips": [
              "Avoid over-irrigation to prevent soil erosion.",
              "Ensure proper field leveling to avoid waterlogging."
            ]
          },
          {
            "type": "Center-Pivot Irrigation",
            "steps": [
              { "step": 1, "description": "Planning and Design", "details": ["Design the pivot system layout based on the field size and shape."] },
              { "step": 2, "description": "Gathering Materials", "details": ["Acquire a center-pivot system, pipes, and necessary connectors."] },
              { "step": 3, "description": "Setting Up the Pivot", "details": ["Install the pivot system at the center of the field."] },
              { "step": 4, "description": "Connecting to Water Source", "details": ["Connect the pivot system to a reliable water source."] },
              { "step": 5, "description": "Operating the System", "details": ["Start the pivot system and adjust the sprinkler heads as needed."] },
              { "step": 6, "description": "Maintenance", "details": ["Regularly inspect the pivot system for leaks and mechanical issues."] }
            ],
            "tips": [
              "Ensure the pivot system is properly anchored to avoid tipping.",
              "Regularly check and adjust sprinkler heads for even water distribution."
            ]
          },
          {
            "type": "Sprinkler System",
            "steps": [
              { "step": 1, "description": "Planning and Design", "details": ["Measure the area and determine the placement of sprinklers."] },
              { "step": 2, "description": "Gathering Materials", "details": ["Get sprinkler heads, pipes, connectors, and a timer."] },
              { "step": 3, "description": "Connecting to Water Source", "details": ["Attach a backflow preventer and pressure regulator to the water source."] },
              { "step": 4, "description": "Laying Out the Pipes", "details": ["Lay out and connect pipes according to your plan."] },
              { "step": 5, "description": "Installing Sprinkler Heads", "details": ["Attach sprinkler heads to the pipes at the planned locations."] },
              { "step": 6, "description": "Testing the System", "details": ["Turn on the water, check for leaks, and adjust sprinklers as needed."] },
              { "step": 7, "description": "Maintenance", "details": ["Regularly inspect and clean sprinkler heads."] }
            ],
            "tips": [
              "Adjust sprinklers to avoid watering sidewalks and driveways.",
              "Use a timer to automate watering schedules."
            ]
          },
          {
            "type": "Subsurface Irrigation",
            "steps": [
              { "step": 1, "description": "Planning and Design", "details": ["Plan the layout of subsurface pipes based on the root depth and soil type."] },
              { "step": 2, "description": "Gathering Materials", "details": ["Get subsurface pipes, emitters, connectors, and a filter."] },
              { "step": 3, "description": "Installing the Pipes", "details": ["Dig trenches and lay the subsurface pipes."] },
              { "step": 4, "description": "Connecting to Water Source", "details": ["Connect the subsurface system to a water source with a filter and pressure regulator."] },
              { "step": 5, "description": "Sealing and Testing", "details": ["Seal the system, turn on the water, and check for leaks."] },
              { "step": 6, "description": "Maintenance", "details": ["Regularly inspect and flush the system to prevent clogs."] }
            ],
            "tips": [
              "Ensure proper installation depth to reach plant roots.",
              "Use a filter to prevent debris from clogging the system."
            ]
          }
        ]
      }
    
      
  return (
    <div>
  <div>
      {irrigationData.irrigationSystems.map((system, index) => (
        <div key={index}>
          <h2>{system.type}</h2>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Step</th>
                <th>Description</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {system.steps.map(step => (
                <tr key={step.step}>
                  <td>{step.step}</td>
                  <td>{step.description}</td>
                  <td>{step.details.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Tips:</h3>
          <ul>
            {system.tips.map((tip, tipIndex) => (
              <li key={tipIndex}>{tip}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Irrigation_procedure
