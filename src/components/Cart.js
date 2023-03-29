import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cart = ({cart}) => {

  let cartContent = null;
  if (cart.length > 0) {
    cartContent =
    <Container>
      <h2>Cart</h2>
      {cart.map((item) => 
      <Row key={item.id}>
        <Col>
          <img src={item.image} alt={item.name} style={{ width: '50px'}}></img>
        </Col>
        <Col>
          <p>{item.name}</p>
        </Col>
        <Col>
          <p>{item.price}</p>
        </Col>
      </Row>
      )}
    </Container>
  }
  return(
    <>
    {cartContent}
    </>
  )
}

export default Cart;