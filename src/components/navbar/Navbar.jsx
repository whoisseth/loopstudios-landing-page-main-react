import "./navbar.scss";
import React from "react";
import menuLogo from "./../../images/icon-hamburger.svg";
import closeLogo from "./../../images/icon-close.svg";
import Media from "react-media";
import { Link } from "react-router-dom";

// import NavLinks from "../navLinks/NavLinks";
import Logo from "./../logo/Logo";
// navLinks
function NavLinks(props) {
  //   const [styleLink, styleMenu] = useState("links");
  return (
    <>
      {/* <div className="links"> */}
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
    </>
  );
}

//  navLinks End

//
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      // <button onClick={this.handleClick}>
      //   {this.state.isToggleOn ? "ON" : "OFF"}
      // </button>
      <div onClick={this.handleClick}>
        <div className="menu">
          {this.state.isToggleOn ? (
            <img src={menuLogo} alt="Menu" />
          ) : (
            <div className="closeMenu">
              <img src={closeLogo} alt="Menu" />
              <NavLinks />
              <h1> Heading 2</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

//
function Menu() {
  return <Toggle />;
}
function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <Media queries={{ MediumScreen: "(max-width: 875px)" }}>
        {(matches) => (matches.MediumScreen ? <Menu /> : <div></div>)}
      </Media>
      <NavLinks />
    </div>
  );
}

export default Navbar;
