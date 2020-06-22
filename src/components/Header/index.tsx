import React from "react";
import { Link } from "react-router-dom";
import './style.css'

class Header extends React.Component<any> {
  render() {
    return (
      <header className="header">
        <img src="img/nasa.png" className="nasaLogo" alt=""/>
        <nav className="header__navigation">
          <Link to="/" className="header__navigation--link">
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
