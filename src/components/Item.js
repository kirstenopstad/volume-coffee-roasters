import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Item = ({ name, origin, price, roast, poundsInStock, id, img, summary, onItemClick, whenSellClicked}) => {
  
  let stock = "";
  let sellButtonText = "";
  let sellButtonStatus = "";
  if (poundsInStock < 1) {
    stock = "Out of Stock";
    sellButtonText = "Unvailable";
    sellButtonStatus = "secondary disabled";
  } else {
    sellButtonText = "Sell";
    sellButtonStatus = "outline-dark";
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
      summary: summary,
      poundsInStock: pounds,
      image: img,
      key: id,
      id: id,
    }
    whenSellClicked(updatedItem)
  }

  return (
    <React.Fragment>
      <Col className="inventory-card">
        <Card style={{ width: '21.5rem' }}>
          <Card.Img variant="top" src={img}/>
          <Card.Body>
            <Card.Text>
            {roast}
            <Card.Title>
              <h4>{name}</h4>
              {` `}${price}
            </Card.Title>
            <p>{stock}</p>
            </Card.Text>
          <form onSubmit={handleSellClick}>
              <Button variant="outline-dark"  onClick={() => onItemClick(id)}>Details</Button>
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
  summary: PropTypes.string,
  id: PropTypes.string,
  onItemClick: PropTypes.func,
  whenSellClicked: PropTypes.func
}
export default Item;