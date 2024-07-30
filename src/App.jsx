import "./App.css";

function App() {
  return (
    <>
      <nav className="header inconsolata-normal">HIER KOMMT DIE NAV BAR</nav>
      <div className="main_container">
        <div className="city_selection_container inconsolata-normal">
          <h1 className="cabin-bold">City Selection</h1>
          <input type="text" />
          <button>search city</button>
        </div>
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
