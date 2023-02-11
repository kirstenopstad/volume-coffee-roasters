import React from "react";
import Item from './Item';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';

const ItemList = ({ items, onItemClick, onQuickSellClick }) => {
  return (
    <React.Fragment>
      <Row xs={1} md={2} className="g-4">
        {items.map((element) =>  
          <Item 
          name={element.name}
          origin={element.origin}
          price={element.price}
          roast={element.roast}
          unitsInStock={element.unitsInStock}
          poundsInStock={element.poundsInStock}
          img={element.image}
          id={element.id}
          key={element.id} 
          onItemClick={onItemClick}
          whenSellClicked={onQuickSellClick} />
          )
        }
      </Row>
    </React.Fragment>    
  );
}

ItemList.propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func,
  onQuickSellClick: PropTypes.func
}

export default ItemList;