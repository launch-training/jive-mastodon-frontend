import "./Navbar.css";
import logo from "../assets/images/elephant-alone.png";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar inconsolata-normal">
      <div className="logo_container">
        <img src={logo} alt="logomark" className="logo-small" />
        <p className="cabin-bold">BreezeFeed</p>
      </div>
      <ul>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Last Posts
        </NavLink>
      </ul>

      <div>
        <Button type="primary">Login</Button>
      </div>
    </header>
  );
}

export default Navbar;
