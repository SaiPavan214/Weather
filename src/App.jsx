import React, { useState } from 'react';
import axios from 'axios';
import Weather from './components/Weather';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = `552c148cb8b96d1a969f2a353837daf1`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const searchLocation = async ({ key }) => {
    if (key === "Enter") {
      try {
        const res = await axios.get(url);
        setData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
      setLocation("");
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white shadow-md"
          placeholder="Enter location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
        />
      </div>

      <Weather weatherData={data}/>
    </div>
  );
}

export default App;
