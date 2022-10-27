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
    <div>
      <Navbar>
        <NavbarBrand href="/">
          <img alt="logo" src={logo} />
          <div className="pageTitle">Cat Tinder</div>
        </NavbarBrand>

        <div className="toggler">
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
        </div>

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <div className="linkContainer">
              <NavItem>
                <NavLink className="grow" href="/">
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="grow" href="/catindex">
                  Index
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="grow" href="/catedit">
                  Edit
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="grow" href="/catshow">
                  Show
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="grow" href="/catnew">
                  New
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="grow" href="/*">
                  Not-Found
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;