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
      id: v4()
    }
    onAddClick(newItem);
  }

  return(
    <form onSubmit={handleFormSubmission}>
      <input type="text" placeholder="Name" name="name"/>
      <br/>
      <input type="text" placeholder="Origin" name="origin"/>
      <br/>
      <input type="number" placeholder="Price" name="price"/>
      <br/>
      <input type="text" placeholder="Roast" name="roast"/>
      <br/>
      <button type="submit">Add</button>
    </form>
  );
}

Add.propTypes = {
  onAddClick: PropTypes.func
}
export default Add;