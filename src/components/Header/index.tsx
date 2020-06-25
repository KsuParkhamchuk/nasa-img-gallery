import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import nasaLogo from "../../img/nasa.png";

class Header extends React.Component<any> {
  render() {
    return (
      <header className="header">
        <nav className="header__navigation">
          <Link to='/' className="nasaLogo">
            <img src={nasaLogo} alt=""/>
          </Link>
          <Link to="/nasa-img-gallery" className="header__navigation--link">
            CURRENT IMAGE
          </Link>
          <Link to="/catalog" className="header__navigation--link">
            CATALOG
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
