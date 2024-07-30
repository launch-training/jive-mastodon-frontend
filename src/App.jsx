import "./App.css";

import SelectCity from "./components/SelectCity";

function App() {
  return (
    <>
      <nav className="header inconsolata-normal">HIER KOMMT DIE NAV BAR</nav>
      <div className="main_container">
          <SelectCity />
        <div className="saved_cities_container inconsolata-normal">
          <h3 className="cabin-bold">Saved Cities</h3>
          <div>New York</div>
          <div>Los Angeles</div>
          <div>Chicago</div>
          <div>PAGINATION</div>
        </div>
        <div className="city_preview_container inconsolata-normal">
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
