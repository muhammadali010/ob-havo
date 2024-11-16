import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

type WeatherData = {
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

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const API_KEY = "d0243b5f32e492f41aaa7f8c7a3a0607"; 
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
      setCity("");
    } catch (err) {
      setError("Shahar nomi noto'g'ri yoki ob-havo ma'lumotlarini topib bo'lmadi.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Ob-havo Ma'lumotlari</h1>
      <form onSubmit={fetchWeather} className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Shahar nomini kiriting..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded-md text-black focus:outline-none shadow-md"
        />
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md shadow-md"
        >
          Qidirish
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default WeatherApp;
