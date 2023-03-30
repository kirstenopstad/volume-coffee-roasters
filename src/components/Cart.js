import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import CloseButton from 'react-bootstrap/CloseButton';
import cartIcon from './../img/icons/cart.svg'
import PropTypes from 'prop-types'
import trashIcon from './../img/icons/trash3.svg'
import plusIcon from './../img/icons/plus.svg'
import minusIcon from './../img/icons/dash.svg'

const Cart = ({cart, cartSummary, onRemoveFromCart, onDecrementFromCart, onAddToCart}) => {
  const [showCartSummary, setShowCartSummary] = useState(false)

  // calculate subtotal
  const subTotal = () => {
    let sub = 0;
    cart.forEach((item) => {
      sub = sub + item.price;
    })
    return sub
  }

  // handle trash can icon click
  const handleDeleteClick = (item) => {
    onRemoveFromCart(item)
  }
  
  // handle plus click
  const handlePlusClick = (item) => {
    onAddToCart(item)
  }
  
  // handle minus click
  const handleMinusClick = (item) => {
    onDecrementFromCart(item)
  }

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
          <Table>
            <thead>
              <tr>
                <th>Qty</th>
                <th>Item</th>
                <th></th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
            {cartSummary.map((item) => 
              <tr key={item.id}>
                <td className="text-center">
                  <img src={plusIcon} alt={`Add another ${item.name} from cart`} onClick={() => handlePlusClick(item)} />
                  <br/>
                  {item.quantity}
                  <br/>
                  <img src={minusIcon} alt={`Remove a ${item.name} from cart`} onClick={() => handleMinusClick(item)} />
                </td>
                <td><img src={item.image} alt={item.name} style={{ width: '80px'}}/></td>
                <td>{item.name}
                </td>
                <td>${item.price}</td>
                <td><img src={trashIcon} alt="Remove item from cart" onClick={() => handleDeleteClick(item)} /></td>
              </tr>
            )}
            </tbody>
          </Table>
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
  cartSummary: PropTypes.array,
  onRemoveFromCart: PropTypes.func,
  onDecrementFromCart: PropTypes.func,
  onAddToCart: PropTypes.func,
}

export default Cart;