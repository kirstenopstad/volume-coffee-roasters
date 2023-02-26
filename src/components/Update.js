import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Update = ({ item, onUpdateSubmit, toggleShowUpdateForm }) => {
  const { name, origin, price, roast, poundsInStock, image, summary, id } = item;
  const handleFormSubmission = (event) => {
    event.preventDefault();
    const newItem = {
      name: (event.target.name.value) ? (event.target.name.value): name,
      origin: (event.target.origin.value) ? (event.target.origin.value): name,
      price: (parseInt(event.target.price.value)) ? (parseInt(event.target.price.value)): price,
      roast: (event.target.roast.value) ? (event.target.roast.value): roast,
      poundsInStock: (parseInt(event.target.pounds.value) ? (parseInt(event.target.pounds.value)): poundsInStock),
      image: image,
      summary: (event.target.summary.value) ? (event.target.summary.value): summary, 
      id: id
    }
    onUpdateSubmit(newItem);
    toggleShowUpdateForm();
  }

  return(
    <form onSubmit={handleFormSubmission}>
      <h3>Update</h3>
      <input type="text" placeholder={name} name="name"/>
      <input type="text" placeholder={origin} name="origin"/>
      <input type="number" placeholder={price} name="price"/>
      <input type="text" placeholder={roast} name="roast"/>
      <input type="text" placeholder={poundsInStock} name="pounds"/>
      <input type="text" placeholder={summary} name="summary"/>
      <button type="submit">Update</button>
    </form>
  );
}

Update.propTypes = {
  item: PropTypes.object,
  onUpdateSubmit: PropTypes.func,
  toggleShowUpdateForm: PropTypes.func
}
export default Update;