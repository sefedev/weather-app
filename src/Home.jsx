import { Button, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import useFetch from "./components/UseFetch";

function Home() {
  const [city, setCity] = useState("");
  const [url, setUrl] = useState("");

  const getCity = (e) => {
    setCity(e.target.value);
  };

  const { data: weather, isPending } = useFetch(url);

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
        <TextField
          type="text"
          placeholder="Enter a city"
          name="city"
          onChange={getCity}
        />
        <Button onClick={handleGetWeather}>Search</Button>

        {weather == "" ? (
          <p></p>
        ) : (
          <p>
            Today: The Temperature is {weather.temperature} running wind at
            speed {weather.wind} condition is {weather.description}
          </p>
        )}
      </form>
    </>
  );
}

export default Home;

const JSON = {
  temperature: "-9 °C",
  wind: "4 km/h",
  description: "Light snow",
  forecast: [
    { day: "1", temperature: "-10 °C", wind: "14 km/h" },
    { day: "2", temperature: "-12 °C", wind: "4 km/h" },
    { day: "3", temperature: "18 °C", wind: " km/h" },
  ],
};
