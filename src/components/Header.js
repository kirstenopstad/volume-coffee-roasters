import React from "react";
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return(
    <React.Fragment>
      <div className="Header">
        <h1>Stumptown Coffee Roasters</h1>
        <Nav className="Navigation">
          <Nav.Item>
            <Nav.Link href="#">Coffee</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Coldbrew</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Gear</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
  </React.Fragment>
  );
};

export default Header;