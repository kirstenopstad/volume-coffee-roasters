import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import addIcon from  './../img/icons/plus-lg.svg'


const FOHItem = ({ item, onItemClick, onAddToCart}) => {

  const {name, origin, price, id, image} = item;

  const handleAddItem = (e) => {
    e.preventDefault();
    onAddToCart(item);
  }  
  return (
    // TODO: make title anchor tag, not div-click
    <React.Fragment>
      <Col className="inventory-card">
        <Card style={{ width: '21.5rem' }}>
          <Card.Img className="inventory-card-img" variant="top" src={image}/>
          <Card.Body>
            <Card.Text>
              {origin}
            </Card.Text>
            <Card.Title onClick={() => onItemClick(id)}>
              <h4>{name}</h4>
              {` `}${price}
            </Card.Title>
          <form onSubmit={handleAddItem}>
            <div id="cart-add">
              <p>Add to Cart</p>
              <Button variant="outline-none" type="submit" >
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
  item: PropTypes.object,
  onItemClick: PropTypes.func,
  onAddToCart: PropTypes.func,
}
export default FOHItem;