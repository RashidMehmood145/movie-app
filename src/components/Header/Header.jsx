import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import logo from "../../images/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div>
          <img src={logo} alt="logo" width="200" />
        </div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;