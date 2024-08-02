import SelectCity from "./components/SelectCity";
import Navbar from "./components/Navbar";
import SavedCitiesOverview from "./components/SavedCitiesOverview";
import {Button, ConfigProvider, Card} from 'antd';

function App() {
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
      <div className="main_container">
        <Card bordered={false} className='box'>
          <SelectCity />
          <SavedCitiesOverview />
        </Card>
        <Card className="city_preview_container inconsolata-normal box">
          <h3 className="cabin-bold">City Preview</h3>
          <p>City: New York</p>
          <p>Weather: Sunny</p>
          <p>Custom Text Example</p>
          <Button type = 'primary'>SAVE CITY</Button>
        </Card>
      </div>
    </ConfigProvider>
  );
}

export default App;
