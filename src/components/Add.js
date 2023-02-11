import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import placeholderImage from './../img/beans/placeholder.png'
import Modal from 'react-bootstrap/Modal';

const Add = ({ onAddClick }) => {

  // handle form
  const handleFormSubmission = (event) => {
    event.preventDefault();

    const newItem = {
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      poundsInStock: 130,
      image: placeholderImage,
      id: v4()
    }
    onAddClick(newItem);
  }

  return(
    <React.Fragment>
      <h3>Add</h3>
      <Form onSubmit={handleFormSubmission}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="French Roast" name="name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Origin</Form.Label>
          <Form.Control placeholder="Single Origin / Blend" name="origin" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="price" placeholder="$17" name="price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Roast</Form.Label>
          <Form.Control placeholder="Dark, Medium, Light" name="roast" />
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
    </React.Fragment>
  );
}

Add.propTypes = {
  onAddClick: PropTypes.func
}
export default Add;