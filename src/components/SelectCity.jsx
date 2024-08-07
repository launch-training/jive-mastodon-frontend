import { Input } from "antd";
import { useState } from "react";

const { Search } = Input;

const SelectCity = ({ setCity }) => {
  const [onChangeCity, setOnChangeCity] = useState("");
  const [toggleAlert, setToggleAlert] = useState(false);
  console.log(onChangeCity);

  const handleSearch = () => {
    setCity(onChangeCity);
    setToggleAlert((prev) => !prev);
  };

  return (
    <div className="city_selection_container inconsolata-normal">
      <h1 className="cabin-bold major_headline">City Selection</h1>
      <Search
        placeholder="Enter city name"
        allowClear
        enterButton="Search city"
        size="medium"
        value={onChangeCity}
        onChange={(e) => setOnChangeCity(e.target.value)}
        onSearch={handleSearch}
      />
      {toggleAlert && (
        <div>
          <p className="alert_city_name">
            Please refine your search if you are not happy with the result.
            Otherwise click save city.
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectCity;
