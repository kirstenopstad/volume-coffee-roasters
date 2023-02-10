import React from "react";
import PropTypes from 'prop-types';

const Detail = ({ item }) => {
  
  return (
    <React.Fragment>
      <div>
        <h4>{item.name}</h4>
        <p>{item.blend}</p>
        <p>{item.price}</p>
        <p>{item.origin}</p>
      </div>
    </React.Fragment>
  )
}

Detail.propTypes = {
  item: PropTypes.object
}
export default Detail;