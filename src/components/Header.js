import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../assets/cat_logo.svg";

const Header = () => {
  return (
    <div>
      <Navbar className="my-auto" color="secondary" dark fixed="top">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 90,
              width: 90,
            }}
          />
          Cat Tinder
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
