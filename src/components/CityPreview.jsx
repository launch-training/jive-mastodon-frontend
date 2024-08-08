import { Button } from "antd";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { notifyFailure, notifySuccess } from "./Toast";
import mastodon_looking_up from "../assets/images/mastodon_looking_up.png";

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
        if(result.status === 400) {
          notifyFailure("This city can't be found.");
          return ;
        }
        const json = await result.json();
        setLocation(json.location);
        setWeather(json.current);
        console.log(json);
      } catch (error) {
        console.log("Ich komme aus dem Error", error);
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
        {location ? 
        <>
        <p>City: {location?.name}</p>
        <p>Region: {location?.region}</p>
        <p>Country: {location?.country}</p>
        <p>Temperature: {weather?.temp_c} °C</p>
        <p>Description: {weather?.condition?.text}</p>
        <img src={weather?.condition?.icon} />
          <Button type="primary" onClick={postGeoPoint}>
            SAVE CITY
        	</Button>
        </>
        : 
        <p>
          <img src={mastodon_looking_up} className="sitting_elephant" />
        </p>
        }
      </div>
    </div>
  );
};

export default CityPreview;
