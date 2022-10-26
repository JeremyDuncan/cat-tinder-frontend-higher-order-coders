import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../assets/cat_logo.svg";

const Header = () => {
  return (
    <div>
      <Navbar className="my-2" color="secondary" dark>
        <NavbarBrand href="/">
        <img
            alt="logo"
            src={logo}
            style={{
              height: 90,
              width: 90,
            }}
          />Cat Tinder</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
