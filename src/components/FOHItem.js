import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import addIcon from  './../img/icons/plus-lg.svg'


const FOHItem = ({ name, origin, price, roast, id, img, onItemClick}) => {

  return (
    // TODO: make title anchor tag, not div-click
    <React.Fragment>
      <Col className="inventory-card">
        <Card style={{ width: '21.5rem' }}>
          <Card.Img variant="top" src={img}/>
          <Card.Body>
            <Card.Text>
              {origin}
            </Card.Text>
            <Card.Title onClick={() => onItemClick(id)}>
              <h4>{name}</h4>
              {` `}${price}
            </Card.Title>
          <form>
            <div id="cart-add">
              <p>Add to Cart</p>
              <Button variant="outline-none" type="submit">
                <img src={addIcon} alt="add item to cart" />
              </Button>
            </div>
          </form>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  )
}

FOHItem.propTypes = {
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
export default FOHItem;