import React from "react";
import PropTypes from 'prop-types';

const List = ({ inventory }) => {
  
  return (
    <React.Fragment>
      {inventory.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>{item.blend}</p>
          <p>{item.price}</p>
          <p>{item.origin}</p>
        </div>
      ))
    }
    </React.Fragment>
  )
}

List.propTypes = {
  inventory: PropTypes.array
}
export default List;