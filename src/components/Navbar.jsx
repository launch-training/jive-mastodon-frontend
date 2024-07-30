import "./Navbar.css";
import logo from "../assets/images/elephant-alone.png";

function Navbar() {
  return (
    <header className="navbar inconsolata-normal">
      <div className="logo_container">
        <img src={logo} alt="logomark" className="logo-small" />
        <p className="cabin-bold">BreezeFeed</p>
      </div>
      <ul>
        <li>Home</li>
        <li>Last Posts</li>
      </ul>

      <div>
        <button>Login</button>
      </div>
    </header>
  );
}

export default Navbar;
