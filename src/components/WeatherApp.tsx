import React, { useState } from "react";
import WeatherCard from "./WeatherCard";

type WeatherData = {
  name: string;
  country: string;
  temp: number;
  humidity: number;
  pressure: number;
  description: string;
  icon: string;
  windSpeed: number;
};

const weatherData: WeatherData[] = [
  {
    name: "Tashkent",
    country: "UZ",
    temp: 20,
    humidity: 55,
    pressure: 1013,
    description: "Clear sky",
    icon: "01d",
    windSpeed: 3.2,
  },
  {
    name: "New York",
    country: "US",
    temp: 15,
    humidity: 70,
    pressure: 1015,
    description: "Cloudy",
    icon: "02d",
    windSpeed: 4.5,
  },
  {
    name: "London",
    country: "GB",
    temp: 10,
    humidity: 85,
    pressure: 1020,
    description: "Rainy",
    icon: "09d",
    windSpeed: 5.1,
  },
  {
    name: "Doha",
    country: "AE",
    temp: 30,
    humidity: 22,
    pressure: 1010,
    description: "Hot and sunny",
    icon: "01d",
    windSpeed: 5.0,
  },
  {
    name: "Paris",
    country: "FR",
    temp: 18,
    humidity: 60,
    pressure: 1012,
    description: "Partly cloudy",
    icon: "03d",
    windSpeed: 3.8,
  },
  {
    name: "Madrid",
    country: "ES",
    temp: 25,
    humidity: 40,
    pressure: 1010,
    description: "Sunny",
    icon: "01d",
    windSpeed: 2.0,
  },
  {
    name: "Dushanbe",
    country: "TJ",
    temp: 22,
    humidity: 50,
    pressure: 1014,
    description: "Clear sky",
    icon: "01d",
    windSpeed: 1.8,
  },
  {
    name: "Abu Dhabi",
    country: "AE",
    temp: 35,
    humidity: 20,
    pressure: 1008,
    description: "Hot and sunny",
    icon: "01d",
    windSpeed: 5.0,
  },
];

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");

  const findWeather = (e: React.FormEvent) => {
    e.preventDefault();
    const result = weatherData.find(
      (data) => data.name.toLowerCase() === city.toLowerCase()
    );
    if (result) {
      setWeather(result);
      setError("");
    } else {
      setError("Shahar uchun ma'lumot topilmadi.");
    }
    setCity("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-900 text-white">
      <h1 className="text-5xl font-extrabold mb-8">Ob-havo Ma'lumotlari</h1>
      <form onSubmit={findWeather} className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Shahar nomini kiriting..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg w-72"
        />
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-bold shadow-lg"
        >
          Qidirish
        </button>
      </form>
      {error && <p className="text-red-500 text-lg mb-4">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default WeatherApp;
