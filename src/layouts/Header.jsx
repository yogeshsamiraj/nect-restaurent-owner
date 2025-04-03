import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
} from "reactstrap";

const Header = () => {

  return (
    <Navbar color="primary" dark expand="md">
      <Collapse navbar isOpen={true}>
      <div className="ms-auto">
      <span style={{color:'white'}}>Restaurant Dashboard</span>
      </div>

      </Collapse>
    </Navbar>
  );
};

export default Header;
