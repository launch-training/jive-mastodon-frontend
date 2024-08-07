import { Button } from "antd";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { notifySuccess } from "./Toast";

const CityPreview = ({ city, loading, setLoading }) => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  const key = import.meta.env.VITE_WEATHER_API_KEY;
  const basic_url = "https://api.weatherapi.com/v1/current.json";

  useEffect(() => {
    getWeatherByCity();
  }, [city]);

  const getWeatherByCity = async () => {
    if (city != null) {
      try {
        const result = await fetch(`${basic_url}?key=${key}&q=${city}`);
        const json = await result.json();
        setLocation(json.location);
        setWeather(json.current);
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const geoObject = {
    latitude: location?.lat,
    longitude: location?.lon,
    name: location?.name,
  };
  console.log(geoObject);
  console.log(JSON.stringify(geoObject));

  const postGeoPoint = async () => {
    try {
      const result = await fetch(`http://localhost:8080/cities`, {
        method: "POST",
        body: JSON.stringify(geoObject),
        headers: { "Content-Type": "application/json" },
      });
      setLoading((prev) => !prev);
      if (result.status === 201) {
        notifySuccess("New city was added!");
      } else if (result.status === 200) {
        notifySuccess("City is already saved!");
      }
      console.log(result.status);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="city_preview">
      <div>
        <h3 className="cabin-bold minor_headline">City Preview</h3>
        <p>City: {location?.name}</p>
        <p>Region: {location?.region}</p>
        <p>Country: {location?.country}</p>
        <p>Temperature: {weather?.temp_c} °C</p>
        <p>Description: {weather?.condition?.text}</p>
        <img src={weather?.condition?.icon} />
      </div>

      <Button type="primary" onClick={postGeoPoint}>
        SAVE CITY
      </Button>
    </div>
  );
};

export default CityPreview;
