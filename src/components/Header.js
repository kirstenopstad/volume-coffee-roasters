import React from "react";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import beans from './../img/stock/beans.jpg'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../img/logo.png'

const Header = () => {
  return(
    <React.Fragment>
      <div className="header">
        <Navbar collapseOnSelect expand="md" variant="dark" className="navigation" >
          <Container >
            <Navbar.Brand href="#home">
              <img src={logo} alt="Volume Coffee Roasters logo" className="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Blog</Nav.Link>
                <Nav.Link href="#pricing">Order</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
        
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="outline-light">Know Your Strength</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        
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