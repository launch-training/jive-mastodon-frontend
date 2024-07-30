import Button from "./Button";
import { useState } from "react";

const SelectCity = () => {

    const [city, setCity] = useState("");

    return (
        <div className="city_selection_container inconsolata-normal">
        <h1 className="cabin-bold">City Selection</h1>
        <input type="text" value = {city} onChange = {e => setCity(e.target.value)} /> <Button text = "search city" />
        </div>
    );
}
    

export default SelectCity;