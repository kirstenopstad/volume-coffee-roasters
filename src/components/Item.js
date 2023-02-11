import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Item = ({ name, origin, price, roast, poundsInStock, id, img, onItemClick, onQuickSellClick}) => {
  
  let stock = "";
  if (poundsInStock === 0) {
    stock = "Out of Stock";
  } else {
    stock = poundsInStock;
  }

  const handleSellClick = (event) => {
    event.preventDefault();

    let pounds = (parseInt(poundsInStock) - 1 )

    const updatedItem = {
      name: name,
      origin: origin,
      price: price,
      roast: roast,
      poundsInStock: pounds,
      id: id,
    }
    onQuickSellClick(updatedItem)
  }

  return (
    <React.Fragment>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} onClick={() => onItemClick(id)}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p>{origin} ${price}</p>
            <p>{roast}</p>
          <form onClick={handleSellClick}>
            <Button variant="secondary" type="submit">Sell</Button>
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
  onQuickSellClick: PropTypes.func
}
export default Item;