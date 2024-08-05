import { Button } from "antd";
import { useEffect, useState } from "react";

const CityPreview = ({city}) => {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);


    const key = import.meta.env.VITE_WEATHER_API_KEY;
    const basic_url = "https://api.weatherapi.com/v1/current.json"
    
    useEffect(() => {
        getWeatherByCity(); 
    }, [city]); 

    const getWeatherByCity = async () => {
        if (city != null){
            try {
                const result = await fetch(`${basic_url}?key=${key}&q=${city}`, {
                  method: 'GET',
                  crossorigin: true}); // ?? brauchen wir das?
                const json = await result.json(); 
                setLocation(json.location);
                setWeather(json.current);
                console.log(json); 
              } catch (error) {
                console.log(error); 
              }
        } 
      };



    return (
        <div className="city_preview">
            <h3 className="cabin-bold minor_headline">City Preview</h3>
            <p>City: {location?.name}</p>
            <p>Region: {location?.region}</p>
            <p>Country: {location?.country}</p>
            <p>Temperature: {weather?.temp_c} °C</p>
            <p>Description: {weather?.condition?.text}</p>
            <img src={weather?.condition?.icon}/>
            <Button type = 'primary'>SAVE CITY</Button>
        </div>
    )
}

export default CityPreview;