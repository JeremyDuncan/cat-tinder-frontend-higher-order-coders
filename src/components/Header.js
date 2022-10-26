import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
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
        <NavLink href="/">Home</NavLink>
        <NavLink href="/catindex">Index</NavLink>
        <NavLink href="/catedit">Edit</NavLink>
        <NavLink href="/catshow">Show</NavLink>
        <NavLink href="/catnew">New</NavLink>
        <NavLink href="/*">Not-Found</NavLink>
      </Navbar>
    </div>
  );
};

export default Header;
