import SelectCity from "./components/SelectCity";
import Navbar from "./components/Navbar";
import SavedCitiesOverview from "./components/SavedCitiesOverview";
import {Button, ConfigProvider, Card} from 'antd';
import CityPreview from "./components/CityPreview";
import { useState } from "react";

function App() {

  const [city, setCity] = useState(null);

  return (
    <ConfigProvider 
      theme={{
        token: {
          // Seed Token
          "colorPrimary": "#bd2bf1",
          "colorInfo": "#bd2bf1",
          "colorTextBase": "#101935",
          "colorSuccess": "#51cb20",
          "colorError": "#e9724c",
          "colorWarning": "#ffc857"
        },
      }}
      >
      <Navbar />
      <div className="main_container inconsolata-normal">
        <Card bordered={false} className='box'>
          <SelectCity setCity={setCity}/>
          <CityPreview city={city}/>
        </Card>
        <SavedCitiesOverview />
      </div>
    </ConfigProvider>
  );
}

export default App;
