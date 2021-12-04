import "./navbar.scss";
import menuLogo from "./../../images/icon-hamburger.svg";
import Media from "react-media";
import NavLinks from "../navLinks/NavLinks";
import Logo from "./../logo/Logo";
const menuStyle = {
  border: "5px solid red",
};

function Menu() {
  return (
    <div onClick={OpenMenu}>
      <div className="menu">
        <img src={menuLogo} alt="Menu" />{" "}
      </div>
    </div>
  );
}
function OpenMenu() {
  return (
    <div>
      <div>{console.log("open works")}</div>
      {/* <NavLinks MenuStyle="Menu-Open" /> */}
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <Media queries={{ MediumScreen: "(max-width: 875px)" }}>
        {(matches) =>
          // matches.MediumScreen ? <Menu /> : <NavLinks MenuStyle="styleLink" />
          matches.MediumScreen ? <Menu /> : <NavLinks />
        }
      </Media>
    </div>
  );
}

export default Navbar;
