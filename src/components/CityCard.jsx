import { Switch } from 'antd';
import { useState } from 'react';


const CityCard = ({city}) => {
    const [active, setActive] = useState(city.active);

    const handleToggle = () => {
        setActive(!active);
        updateActiveStatus(!active);
      };

      const updateActiveStatus = async (status) =>{
        try {const result = await fetch(`http://localhost:8080/cities/${city.uuid}`, {
            method: "PUT",
            body: JSON.stringify({active:status}),
            headers: { "Content-Type": "application/json" }}    
        )
        } catch (error) {
            console.log(error);
        }
      }

    return (
        <div className="city_box">
            <Switch checked = {active} onChange={handleToggle} />
            <p>
            {city.name}
            </p>
        </div>
    )
}

export default CityCard;