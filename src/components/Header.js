import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="">
        <Link to={`${process.env.PUBLIC_URL}/`} className="header__link">
          Search
        </Link>
      </header>
    );
  }
}

export default Header;
