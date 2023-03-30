import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
import cartIcon from './../img/icons/cart.svg'
import PropTypes from 'prop-types'
import { propTypes } from "react-bootstrap/esm/Image";

const Cart = ({cart, cartSummary}) => {
  const [showCartSummary, setShowCartSummary] = useState(false)

  // calculate subtotal
  const subTotal = () => {
    let sub = 0;
    cart.forEach((item) => {
      sub = sub + item.price;
      console.log(sub)
    })
    return sub
  }

  // use cart summary to build concise cart (just items that have been added to cart with quantity info)
  const getConciseCart = () => {
    // add detailed object info to each obecjt in cartSummary
    // init empty conciseCart array
    let conciseCart = [];
    // for each key in cartSummary
    Object.keys(cartSummary).forEach((key) => {
      // get item to copy in by filtering by id
      let itemDetails = cart.filter(i => i.id === key)[0]
      // get quantity of that item
      let qty = cartSummary[key]
      // get itemSummary
      let itemSummary = {...itemDetails, quantity: qty}
      // add itemSummary obj to concise Cart
      conciseCart = [...conciseCart, itemSummary]
    })
    return conciseCart
  } 

  const conciseCart = getConciseCart();

  let cartContent = 
    <div className="cart-circle">
      <img src={cartIcon} className="cart-icon" onClick={() => setShowCartSummary(!showCartSummary)}/>
    </div>
  if (showCartSummary) {
    cartContent =
    <Container className="cart-summary">
      <Row>
        <Col>
          <h2>Cart</h2>
        </Col>
        <Col>
          <CloseButton 
          style={{float: 'right', paddingBottom: '5px'}}
          onClick={() => {setShowCartSummary(!showCartSummary)}}
          />
        </Col>
      </Row>
      {conciseCart.map((item) => 
      <Row key={item.id}>
        <Col>
          <p>{item.quantity}</p>
        </Col>
        <Col>
          <img src={item.image} alt={item.name} style={{ width: '80px'}}></img>
        </Col>
        <Col>
          <p>{item.name}</p>
        </Col>
        <Col>
          <p>${item.price}</p>
        </Col>
      </Row>
      )}
      <Row>
        <Col>
          <p>Subtotal: ${subTotal()}</p>
        </Col>
      </Row>
    </Container>
  }
  return(
    <div className="cart">
    {cartContent}
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.array,
  cartSummary: PropTypes.object
}

export default Cart;