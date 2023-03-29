import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const PostModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>{props.post.title}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img 
          src={props.post.image} 
          alt={props.post.caption} 
          style={{width: '100%', marginBottom: `15px`}}
        />
        <p>{props.post.tagline} coming soon!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PostModal