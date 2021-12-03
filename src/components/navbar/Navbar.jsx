import logo from "./../../images/logo.svg";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="links">
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/careers">
          Careers
        </Link>
        <Link className="link" to="/events">
          Events
        </Link>
        <Link className="link" to="/products">
          Products
        </Link>
        <Link className="link" to="/support">
          Support
        </Link>
      </div>
      {/* <div></div> */}
    </div>
  );
}

export default Navbar;
