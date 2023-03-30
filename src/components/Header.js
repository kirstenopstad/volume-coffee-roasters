import React from "react";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import logo from './../img/logo.png'
import subGif from './../img/stock/coffee-coffee-time.gif'

const SubscribeModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Subscriptions</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="sub-modal">
        <img src={subGif} alt="playful gif for Volume Coffee Roasters subscribers"></img>
        <p>Thanks for clicking subscribe!</p>
        <p>We're not taking orders just yet, check back soon!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  
  return(
      <div className="header">
        <Navbar collapseOnSelect expand="md" variant="dark" className="navigation" >
          <Container >
            <Navbar.Brand href="#index">
              <img src={logo} alt="Volume Coffee Roasters logo" className="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#order">Order</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
        
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="outline-light">Know Your Strength</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="text-white hero">
        <div className="hero-mask">
            <h1>Free shipping 
              <br/>
              <span>on all subscriptions</span>
              <p>plus get 30% of your first order with code NEWBFF</p>
            </h1>
          <Button variant="outline-light" onClick={() => setModalShow(true)}>
            Subscribe
          </Button>
          </div>
        </div>
      <SubscribeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
    </div>
  );
};

export default Header;