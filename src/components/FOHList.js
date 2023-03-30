import React from "react";
import FOHItem from './FOHItem';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';

const FOHList = ({ items, onItemClick, handleAddToCart }) => {
  return (
    <React.Fragment>
      <Row xs={1} md={2} lg={3} className="g-4">
        {items.map((element) =>  
          <FOHItem
          item={element} 
          key={element.id} 
          onItemClick={onItemClick}
          onAddToCart={handleAddToCart}/>
          )
        }
      </Row>
    </React.Fragment>    
  );
}

FOHList.propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func,
  handleAddToCart: PropTypes.func
}

export default FOHList;