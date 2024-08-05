import {Input} from 'antd';
import { useState } from "react";

const { Search } = Input;

const SelectCity = ({city, setCity}) => {

    console.log(city)

    return (
        <div className="city_selection_container inconsolata-normal">
        <h1 className="cabin-bold major_headline">City Selection</h1>
        <Search
        placeholder="Enter city name"
        allowClear
        enterButton="Search city"
        size="medium"
        value = {city} 
        onChange = {e => setCity(e.target.value)}
        />
        </div>
    );
}
    

export default SelectCity;