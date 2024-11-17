import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai"; // Use ES6 import

function Chatbot() {
  const [phosphorus, setPhosphorus] = useState('');
  const [nitrogen, setNitrogen] = useState('');
  const [potassium, setPotassium] = useState('');
  const [crop, setCrop] = useState('');

  const [response, setResponse] = useState('');
  const [loading, setloading] = useState(false);

  const genAI = new GoogleGenerativeAI("AIzaSyCOhxHOkcUgq3XpUT_-ayWwNXrw1OzzLLQ"); // Replace with your actual API key

  async function run() {
    try {
      setloading(true);
      const prompt = `Based on the following soil nutrient data, provide a concise crop suggestion and analysis:
        - Crop Name: ${crop}
        - Soil Nitrogen Content: ${nitrogen} kg/ha
        - Soil Phosphorus Content: ${phosphorus} kg/ha
        - Soil Potassium Content: ${potassium} kg/ha
        
        Your response should:
        1. Analyze the soil's current nutrient levels and their suitability for ${crop}.
        2. Estimate the expected yield potential based on the provided nutrient data.
        3. Provide specific recommendations for optimizing soil nutrients, including precise fertilizer or amendment requirements.
        4. Suggest best practices for improving crop growth under the given conditions.
        5. Highlight potential risks or challenges due to these nutrient levels and strategies to address them.
        
        Please ensure the response is practical and concise, limited to 20-30 lines for easy understanding and implementation.`;
  
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const responseText = result.response.text();
  
      setResponse(responseText);
    } catch (error) {
      console.error("Error generating content:", error);
      if (error.message.includes("The model is overloaded")) {
        setResponse(
          "The AI model is currently overloaded. Please try again after a few moments."
        );
      } else {
        setResponse("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setloading(false);
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    run(phosphorus, nitrogen, potassium, crop);
  }

  return (
    <>

    {loading&&<span className="loading loading-spinner text-success"></span>}
      <div className="flex justify-center items-center mt-20">
        <div className="form-container w-[370px] h-[450px] p-2 rounded-lg border flex flex-col items-center">
          <h2 className=" mb-6 mt-3 font-md">Crop Suggestion based on Nutrient Levels:</h2>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Phosphorus</label>
              <input
                className="border border-gray-300 p-2 w-full rounded mt-1 outline-none"
                placeholder="Enter the value (e.g., 40)"
                type="text"
                value={phosphorus}
                onChange={(e) => setPhosphorus(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700">Nitrogen</label>
              <input
                className="border border-gray-300 p-2 w-full rounded mt-1 outline-none"
                placeholder="Enter the value (e.g., 50)"
                type="text"
                value={nitrogen}
                onChange={(e) => setNitrogen(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700">Potassium</label>
              <input
                className="border border-gray-300 p-2 w-full rounded mt-1 outline-none"
                placeholder="Enter the value (e.g., 30)"
                type="text"
                value={potassium}
                onChange={(e) => setPotassium(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700">Select Crop</label>
              <select
                className="border border-gray-300 p-2 w-full rounded mt-1 outline-none"
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
              >
                <option disabled selected value="">Select a crop</option>
                <option>Wheat</option>
<option>Apple</option>
<option>Orange</option>
<option>Mustard</option>
<option>Rice</option>
<option>Sugarcane</option>
<option>Oilseed</option>
<option>Barley</option>
<option>Maize</option>
<option>Bajra</option>
<option>Jowar</option>
<option>Pulses</option>
<option>Tea</option>
<option>Coffee</option>
<option>Rubber</option>
<option>Cotton</option>
<option>Jute</option>
<option>Groundnut</option>
<option>Soybean</option>
<option>Sunflower</option>
<option>Safflower</option>
<option>Linseed</option>
<option>Coconut</option>
<option>Sesame</option>
<option>Cashew</option>
<option>Banana</option>
<option>Mango</option>
<option>Papaya</option>
<option>Guava</option>
<option>Pomegranate</option>
<option>Grapes</option>
<option>Pineapple</option>
<option>Watermelon</option>
<option>Muskmelon</option>
<option>Litchi</option>
<option>Jackfruit</option>
<option>Chickpea</option>
<option>Pea</option>
<option>Lentil</option>
<option>Urad</option>
<option>Moong</option>
<option>Arhar</option>
<option>Black gram</option>
<option>Green gram</option>
<option>Horse gram</option>
<option>Turmeric</option>
<option>Ginger</option>
<option>Garlic</option>
<option>Onion</option>
<option>Potato</option>
<option>Tomato</option>
<option>Brinjal</option>
<option>Cauliflower</option>
<option>Cabbage</option>
<option>Carrot</option>
<option>Radish</option>
<option>Beetroot</option>
<option>Spinach</option>
<option>Lettuce</option>
<option>Bell Pepper</option>
<option>Chilli</option>
<option>Okra</option>
<option>Bitter gourd</option>
<option>Ridge gourd</option>
<option>Snake gourd</option>
<option>Pumpkin</option>
<option>Cucumber</option>
<option>Zucchini</option>
<option>Beans</option>
<option>Cluster Beans</option>
<option>French Beans</option>
<option>Chickpea Greens</option>
<option>Methi</option>
<option>Parsley</option>
<option>Mint</option>
<option>Coriander</option> 
<option>Sweet Corn</option>
<option>Sorghum</option>
<option>Millets</option>
<option>Ragi</option>
<option>Barnyard Millet</option>
<option>Amaranth Seeds</option>
<option>Buckwheat</option>
<option>Teff</option>
<option>Chia Seeds</option>
<option>Spices</option>
<option>Herbs</option>
<option>Medicinal Plants</option>
<option>Aromatic Plants</option>
<option>Flower Crops</option>
<option>Ornamental Plants</option>


              </select>
            </div>

            <button
              className="btn-success bg-green-700 text-white p-2 rounded w-full"
              type="submit"
            >
              Predict
            </button>
          </form>
        </div>
      </div>
      <div className="mt-20 flex justify-center w-full">
        {response && <div className="w-1/2 p-4 bg-yellow-100 rounded-lg">
          <p className="text-center whitespace-pre-line">
            {response.replace(/[*#]/g, ' ')}
          </p>
        </div>
        }</div>
    </>
  );
}

export default Chatbot;
