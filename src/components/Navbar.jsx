import "./Navbar.css";
import logo from "../assets/images/elephant-alone.png";
import {Button} from 'antd';

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
        <Button type = 'primary'>Login</Button>
      </div>
    </header>
  );
}

export default Navbar;
