import React from "react";
import { Navbar } from "reactstrap";
const Footer = () => {
  return (
    <>
    <Navbar
      className="my-auto"
      color="secondary"
      dark
      fixed="bottom"
      id="navFooter"
    >
      <h4>Created By: Goran and Jeremy &copy; 2022</h4>
    </Navbar>
    </>
  );
};

export default Footer;
