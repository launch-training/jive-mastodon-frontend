import { Button } from "antd";

const CityPreview = ({city}) => {


    return (
        <div className="city_preview">
            <h3 className="cabin-bold minor_headline">City Preview</h3>
            <p>City: {city}</p>
            <p>Weather: Sunny</p>
            <p>Custom Text Example</p>
            <Button type = 'primary'>SAVE CITY</Button>
        </div>
    )
}

export default CityPreview;