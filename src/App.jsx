import "./App.css";

import SelectCity from "./components/SelectCity";
import Navbar from "./components/Navbar";
import SavedCitiesOverview from "./components/SavedCitiesOverview";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
