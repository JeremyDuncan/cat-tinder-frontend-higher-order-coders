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
      <h4>Created By: <a href="http://www.goran-portfolio.com/">Goran Cvetic</a> and <a href="https:/www.jeremy-duncan.com">Jeremy Duncan</a> &copy; 2022</h4>
    </Navbar>
    </>
  );
};

export default Footer;
