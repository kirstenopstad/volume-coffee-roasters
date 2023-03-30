import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';

const Update = ({ item, onUpdateSubmit, toggleShowUpdateForm, onClose }) => {
  const { name, origin, price, roast, poundsInStock, image, summary, id } = item;
  const handleFormSubmission = (event) => {
    event.preventDefault();
    const newItem = {
      name: (event.target.name.value) ? (event.target.name.value): name,
      origin: (event.target.origin.value) ? (event.target.origin.value): name,
      price: (parseInt(event.target.price.value)) ? (parseInt(event.target.price.value)): price,
      roast: (event.target.roast.value) ? (event.target.roast.value): roast,
      poundsInStock: (parseInt(event.target.poundsInStock.value) ? (parseInt(event.target.poundsInStock.value)): poundsInStock),
      image: image,
      summary: (event.target.summary.value) ? (event.target.summary.value): summary, 
      id: id
    }
    onUpdateSubmit(newItem);
    toggleShowUpdateForm();
  }

  return(
    <>
        <div className="update-header">
          <h3>Update</h3>
          <CloseButton aria-label="Hide" onClick={onClose} />
        </div>
      <Form onSubmit={handleFormSubmission}>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder={name} name="name" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Origin</Form.Label>
            <Form.Control type="text" placeholder={origin} name="origin" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder={price} name="price" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Roast</Form.Label>
            <Form.Control type="text" placeholder={roast} name="roast" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>PoundsInStock</Form.Label>
            <Form.Control type="text" placeholder={poundsInStock} name="poundsInStock" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Summary</Form.Label>
            <Form.Control type="text" placeholder={summary} name="summary" />
        </Form.Group>
        <Button type="submit" variant="outline-dark">Update</Button>
      </Form>
    </>
  );
}

Update.propTypes = {
  item: PropTypes.object,
  onUpdateSubmit: PropTypes.func,
  toggleShowUpdateForm: PropTypes.func,
  onClose: PropTypes.func
}
export default Update;