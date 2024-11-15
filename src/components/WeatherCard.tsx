import React from "react";


type WeatherProps = {
  weather: {
    name: string;
    country: string;
    temp: number;
    humidity: number;
    pressure: number;
    description: string;
    icon: string;
    windSpeed: number;
  };
};

const WeatherCard: React.FC<WeatherProps> = ({ weather }) => {
  const { name, country, temp, humidity, pressure, description, icon, windSpeed } = weather;

  return (
    <div className="bg-gradient-to-b from-white to-gray-200 text-gray-800 p-6 rounded-xl shadow-2xl max-w-md w-full transition-transform transform hover:scale-105">
      <h2 className="text-3xl font-extrabold mb-2">
        {name}, {country}
      </h2>
      <p className="text-lg font-medium mb-4 uppercase text-gray-600">{description}</p>
      <div className="flex items-center justify-between mb-6">
        <p className="text-5xl font-bold text-blue-600">{Math.round(temp)}°C</p>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-20 h-20"
        />
      </div>
      <div className="text-sm grid grid-cols-2 gap-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Namlik:</span> {humidity}%
        </p>
        <p>
          <span className="font-semibold">Shamol:</span> {windSpeed} m/s
        </p>
        <p>
          <span className="font-semibold">Bosim:</span> {pressure} hPa
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
