import React from "react";
import PropTypes from 'prop-types';

const Item = ({ name, origin, price, roast, poundsInStock, id, onItemClick, onQuickSellClick}) => {
  let stock = "";
  if (poundsInStock === 0) {
    stock = "Out of Stock";
  } else {
    stock = poundsInStock;
  }

  return (
    <React.Fragment>
      <div onClick={() => onItemClick(id)}>
        <h4>{name}</h4>
        <p>{origin}</p>
        <p>${price}</p>
        <p>{roast}</p>
      </div>
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