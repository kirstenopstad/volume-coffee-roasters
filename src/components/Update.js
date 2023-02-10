import React from "react";
import PropTypes from 'prop-types';

const Update = ({ item, onUpdateClick }) => {

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const newItem = {
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      pounds: event.target.pounds.value,
    }
    onUpdateClick(newItem);
  }

  return(
    <form onSubmit={handleFormSubmission}>
      <h3>Update</h3>
      <input type="text" placeholder={item.name} name="name"/>
      <input type="text" placeholder={item.origin} name="origin"/>
      <input type="number" placeholder={item.price} name="price"/>
      <input type="text" placeholder={item.roast} name="roast"/>
      <input type="text" placeholder={item.poundsInStock} name="pounds"/>
      <button type="submit">Update</button>
    </form>
  );
}

Update.propTypes = {
  item: PropTypes.object,
  onUpdateClick: PropTypes.func
}
export default Add;