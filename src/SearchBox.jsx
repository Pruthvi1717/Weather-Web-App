import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchBox({ updateInfo }) {
  let [error, setError] = useState(false);
  let [city, setCity] = useState("");

  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  let getWeatherInfo = async (cityName) => {
    try {
      let response = await fetch(`${apiUrl}?q=${cityName}&appid=${API_KEY}&units=metric`);
      let data = await response.json();
      console.log("API Response:", data);

      if (data.cod !== 200) {
        // If cod is not 200, throw error
        throw new Error(data.message || "City not found");
      }

      let result = {
        city: cityName,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
      };

      console.log("Processed Result:", result);
      return result;
    } catch (err) {
      console.error("Error fetching weather:", err.message);
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError(false);
      let newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
      setCity(""); // clear input only if success
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h1>Search For The Weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br /> <br />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
        {error && <p style={{ color: "red" }}> No such place exists. Try again!</p>}
      </form>
    </div>
  );
}
