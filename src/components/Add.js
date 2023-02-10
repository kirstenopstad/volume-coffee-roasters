import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const Add = ({ onAddClick }) => {
  const handleFormSubmission = (event) => {
    event.preventDefault();

    const newItem = {
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      unitsInStock: parseInt(event.target.units.value),
      poundsInStock: (parseInt(event.target.units.value) * 130),
      id: v4()
    }
    onAddClick(newItem);
  }

  return(
    <form onSubmit={handleFormSubmission}>
      <h3>Add</h3>
      <input type="text" placeholder="Name" name="name"/>
      <input type="text" placeholder="Origin" name="origin"/>
      <input type="number" placeholder="Price" name="price"/>
      <input type="text" placeholder="Roast" name="roast"/>
      <input type="number" placeholder="Units in Stock" name="units"/>
      <button type="submit">Add</button>
    </form>
  );
}

Add.propTypes = {
  onAddClick: PropTypes.func
}
export default Add;