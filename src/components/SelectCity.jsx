import {Input} from 'antd';
import { useState } from "react";

const { Search } = Input;

const SelectCity = ({setCity}) => {

    const [onChangeCity, setOnChangeCity] = useState("");

    const handleSearch = () => {
        setCity(onChangeCity);
    }

    return (
        <div className="city_selection_container inconsolata-normal">
        <h1 className="cabin-bold major_headline">City Selection</h1>
        <Search
        placeholder="Enter city name"
        allowClear
        enterButton="Search city"
        size="medium"
        value = {onChangeCity} 
        onChange = {e => setOnChangeCity(e.target.value)}
        onSearch={handleSearch}
        />
        </div>
    );
}
    

export default SelectCity;