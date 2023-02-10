import React from "react";
import PropTypes from 'prop-types';

const List = ({ inventory, onItemClick }) => {
  
  return (
    <React.Fragment>
      {inventory.map((item) => (
        <div key={item.id} onClick={() => onItemClick(item.id)}>
          <h4>{item.name}</h4>
          <p>{item.blend}</p>
          <p>${item.price}</p>
          <p>{item.origin}</p>
        </div>
      ))
    }
    </React.Fragment>
  )
}

List.propTypes = {
  inventory: PropTypes.array,
  onItemClick: PropTypes.func
}
export default List;