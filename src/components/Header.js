import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import logo from "../assets/cat_logo.svg";

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="header">
      <Navbar className="desktop" fixed="top">
        <NavbarBrand href="/">
          <img alt="logo" src={logo} />
          <div className="pageTitle">Cat Tinder</div>
        </NavbarBrand>
        <div className="linkContainer">
          <NavLink className="grow" href="/">
            Home
          </NavLink>
          <NavLink className="grow" href="/catindex">
          Available Cats
          </NavLink>
          <NavLink className="grow" href="/catnew">
          Add Cat
          </NavLink>

        </div>
      </Navbar>

      <Navbar className="mobile"  fixed="top">
        <NavbarBrand href="/">
          <img alt="logo" src={logo} />
          <div className="pageTitle">Cat Tinder</div>
        </NavbarBrand>

        <div className="toggler">
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
        </div>

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
              
              <NavItem>
                <NavLink className="grow mobileLinks" href="/">
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="grow mobileLinks" href="/catindex">
                  Available Cats
                </NavLink>
              </NavItem>


              <NavItem>
                <NavLink className="grow mobileLinks" href="/catnew">
                  Add Cat
                </NavLink>
              </NavItem>
  
             
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
