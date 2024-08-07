import SelectCity from "../components/SelectCity";
import SavedCitiesOverview from "../components/SavedCitiesOverview";
import { Card } from "antd";
import CityPreview from "../components/CityPreview";
import { useState } from "react";

function Start() {
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="main_container inconsolata-normal">
      <div className="flex_container">
      <Card bordered={false} className="box">
        <SelectCity setCity={setCity} />
        <CityPreview city={city} loading={loading} setLoading={setLoading} />
      </Card>
      <SavedCitiesOverview loading={loading} /></div>
    </div>
  );
}

export default Start;
