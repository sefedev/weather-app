import React, { useState } from "react";
import useFetch from "./components/UseFetch";

function Home() {
  const [city, setCity] = useState("");
  const [url, setUrl] = useState("");

  const { data: weather, error, isPending } = useFetch(url);

  const handleGetWeather = (e) => {
    e.preventDefault();
    setUrl(`https://goweather.herokuapp.com/weather/${city}`);
    console.log(url);
    console.log(city);
    console.log(weather);
  };

  return (
    <>
      <form>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter a City..."
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleGetWeather}
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center w-full">
        {isPending && <p>Loading...</p>}
        {error && <p>{error.message}</p>}

        {weather && (
          <div className="w-2/3 p-6 mt-16 bg-white border border-red-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {city} {weather.temperature}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Running Wind at speed {weather.wind} condition is{" "}
              {weather.description}
            </p>
          </div>
        )}
        
      </div>
    </>
  );
}

export default Home;
