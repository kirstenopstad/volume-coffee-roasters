import React from "react";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import beans from './../img/stock/beans.jpg'


const Header = () => {
  return(
    <React.Fragment>
      <div className="header">
        <h1>Stumptown <span className="sub-heading">Coffee Roasters</span></h1>
        <Nav className="navigation">
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
        
        <Card className="bg-dark text-white hero">
        <div className="hero-mask">
        <Card.Img src={beans} alt="roasted coffee beans"/>
        </div>
        <Card.ImgOverlay className="hero-content">
          <Card.Title>
            <h1>Free shipping 
              <br/>
              <span>on all subscriptions</span>
            </h1>
          </Card.Title>
          <Card.Text>
            plus get 30% of your first order with code NEWBFF
          </Card.Text>
          {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
          <Button variant="outline-light">Subscribe</Button>
        </Card.ImgOverlay>
      </Card>
      </div>
  </React.Fragment>
  );
};

export default Header;