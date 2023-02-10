import React from "react";
import PropTypes from 'prop-types';

const Detail = ({ item }) => {
  
  return (
    <React.Fragment>
      <div className="Detail">
        <h3>Detail</h3>
        <h4>{item.name}</h4>
        <p>{item.blend}</p>
        <p>${item.price}</p>
        <p>{item.origin}</p>
        <p>Units in Stock:{item.unitsInStock}</p>
        <p>Pounds in Stock: {item.poundsInStock} lbs.</p>
      </div>
    </React.Fragment>
  )
}

Detail.propTypes = {
  item: PropTypes.object
}
export default Detail;