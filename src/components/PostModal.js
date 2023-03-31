import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Quiz from "./Quiz";

const PostModal = (props) => {
  // TODO: conditionally render quiz component 
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
          className="post"
          style={{width: '100%', marginBottom: `15px`}}
        />
        <p>{props.post.tagline} coming soon!</p>
        <Quiz 
          quizData={props.post.quizQuestions}
          quizKey={props.post.quizKey}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PostModal