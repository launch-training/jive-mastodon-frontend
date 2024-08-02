import "./App.css";

import SelectCity from "./components/SelectCity";
import Navbar from "./components/Navbar";
import SavedCitiesOverview from "./components/SavedCitiesOverview";
import {Button, ConfigProvider} from 'antd';

function App() {
  return (
    <ConfigProvider 
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#bd2bf1'
        },
      }}
      >
      <Navbar />
      <div className="main_container">
        <div className="left">
          <SelectCity />
          <SavedCitiesOverview />
        </div>
        <div className="city_preview_container inconsolata-normal right">
          <h3 className="cabin-bold">City Preview</h3>
          <p>City: New York</p>
          <p>Weather: Sunny</p>
          <p>Custom Text Example</p>
          <button>save</button>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
