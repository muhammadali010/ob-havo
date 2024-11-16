import React from "react";

type WeatherProps = {
  weather: {
    name: string;
    main: {
      temp: number;
      humidity: number;
      pressure: number;
    };
    weather: { description: string; icon: string }[];
    wind: { speed: number };
    sys: { country: string };
  };
};

const WeatherCard: React.FC<WeatherProps> = ({ weather }) => {
  const { name, main, weather: weatherDetails, wind, sys } = weather;

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-2">
        {name}, {sys.country}
      </h2>
      <p className="text-lg mb-4">
        {weatherDetails[0].description.toUpperCase()}
      </p>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-4xl font-bold">{Math.round(main.temp)}°C</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`}
          alt={weatherDetails[0].description}
          className="w-16 h-16"
        />
      </div>
      <p>Namlik: {main.humidity}%</p>
      <p>Havo bosimi: {main.pressure} hPa</p>
      <p>Shamol tezligi: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
