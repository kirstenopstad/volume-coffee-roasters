import React from "react";
import Item from './Item';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({ items, onItemClick, onQuickSellClick }) => {
  return (
    <React.Fragment>
      <div className="itemList">
        {items.map((element) =>  
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
          )
        }
      </div>
    </React.Fragment>    
  );
}

ItemList.propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func,
  onQuickSellClick: PropTypes.func
}

export default ItemList;