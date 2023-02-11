import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Item = ({ name, origin, price, roast, poundsInStock, id, img, onItemClick, whenSellClicked}) => {
  
  let stock = "";
  let sellButtonText = "";
  let sellButtonStatus = "";
  if (poundsInStock < 1) {
    stock = "Out of Stock";
    sellButtonText = "Unvailable";
    sellButtonStatus = "disabled";
  } else {
    sellButtonText = "Sell";
    sellButtonStatus = "secondary";
    stock = poundsInStock + " lbs. in Stock" ;
  }

  
  const handleSellClick = (event) => {
    event.preventDefault();
    
    let pounds = 0;

    if (poundsInStock > 0) {
      sellButtonStatus = "Sell";
      pounds = (parseInt(poundsInStock) - 1 )
    } else {
      sellButtonStatus = "Out of Stock";
    }

    const updatedItem = {
      name: name,
      origin: origin,
      price: price,
      roast: roast,
      poundsInStock: pounds,
      image: img,
      key: id,
      id: id,
    }
    whenSellClicked(updatedItem)
  }

  return (
    <React.Fragment>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p>{origin} ${price} {roast}</p>
            <p>{stock}</p>
          <form onSubmit={handleSellClick}>
            <Button variant="secondary"  onClick={() => onItemClick(id)}>Details</Button>
            <Button variant={sellButtonStatus} type="submit">{sellButtonText}</Button>
          </form>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  )
}

Item.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string, 
  unitsInStock: PropTypes.number,
  poundsInStock: PropTypes.number,
  id: PropTypes.string,
  onItemClick: PropTypes.func,
  whenSellClicked: PropTypes.func
}
export default Item;