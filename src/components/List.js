import React from "react";
import Item from './Item';
import PropTypes from 'prop-types';

const ItemList = ({ items, onItemClick, onQuickSellClick }) => {
  return(
    <React.Fragment>
      {items.map((element) => ( 
        <Item 
          name={element.name}
          origin={element.origin}
          price={element.price}
          roast={element.roast}
          unitsInStock={element.unitsInStock}
          poundsInStock={element.poundsInStock}
          id={element.id}
          key={element.id} 
          onItemClick={onItemClick}
          onQuickSellClick={onQuickSellClick} />
      ))
      }
    </React.Fragment>    
  );
}

ItemList.propTypes = {
  items: PropTypes.array
}

export default ItemList;