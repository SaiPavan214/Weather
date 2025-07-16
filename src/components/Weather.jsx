import React from 'react';

const Weather = ({ weatherData }) => {
  console.log(weatherData);

  if (!weatherData.weather) return null;

  return (
    <div className="w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%] flex">
      {/* Left Section */}
      <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
        <div className="flex flex-col items-start justify-between h-full">
          <div>
            <p className="text-xl">
              {weatherData.name}, {weatherData.sys.country}
            </p>
            <p className="text-sm capitalize">
              {weatherData.weather[0].description}
            </p>
          </div>
          <div>
            <h1 className="text-6xl font-semibold">
              {weatherData.main.temp.toFixed()}°C
            </h1>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-between items-end">
        <div className="relative mt-4">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="w-[120px]"
          />
        </div>

        {/* Weather Details */}
        <div className="flex flex-col justify-evenly gap-y-2 my-4 text-xs mr-4">
          <div className="flex justify-between gap-x-8">
            <p>Feels like</p>
            <p className="font-bold w-20">
              {weatherData.main.feels_like.toFixed()}°C
            </p>
          </div>
          <div className="flex justify-between gap-x-8">
            <p>Humidity</p>
            <p className="font-bold w-20">
              {weatherData.main.humidity}%
            </p>
          </div>
          <div className="flex justify-between gap-x-8">
            <p>Wind Speed</p>
            <p className="font-bold w-20">
              {(weatherData.wind.speed * 3.6).toFixed()} km/h
            </p>
          </div>
          <div className="flex justify-between gap-x-8">
            <p>Pressure</p>
            <p className="font-bold w-20">
              {weatherData.main.pressure} hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
