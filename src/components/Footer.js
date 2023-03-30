import React, { useState, useRef} from "react";
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import logo from './../img/logo.png'
import emailjs from '@emailjs/browser';

const Footer = ({toggleBOH}) => {
  const [bohChecked, setBohChecked] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailResult, setEmailResult] = useState(false);

  const handleToggle =  () => {
    const status = bohChecked ? false : true;
    setBohChecked(status)
    toggleBOH(bohChecked)
  }

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          // show the user a success message
          if (result.status === 200) {
            setEmailResult('Your message has been sent!')
          }
          console.log(result)
        }, (error) => {
          // show the user an error
          setEmailError(error.text)
          console.log(error)
      });
  };

  let emailNotification = null;
  if (emailResult) {
    emailNotification = emailResult
  }
  if (emailError) {
    emailNotification = emailError 
  }

  return (
    <div className="footer">
        <Row xs={1} md={3}>
          <Col className="contact-form">
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" name="user_name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" style={{ height: '100px' }} type="text" placeholder="Message" name="message" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Email" name="user_email" required/>
                </Form.Group>
                <Button variant="outline-light" type="submit">Submit</Button>
              </Form>
              {emailNotification}
          </Col>
          <Col className="toggle">
            <Form.Group>
              <Form.Check
                type="switch"
                id="toggle-check"
                title="FOH | BOH"
                onChange={handleToggle}
              />
              <Form.Label>FOH | BOH</Form.Label>
            </Form.Group>
            
            <br/>
          </Col>
          <Col className="contact-info">
            <img src={logo} className="logo" alt="Volume Coffee Roasters logo"></img>
            <p>
              Volume Coffee Roasters 
              <br/>
              123 Industrial Way
              <br/>
              Scranton, PA 12345
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="dev-branding">
            <a href="https://built-by-ko.web.app/">Built By KO</a>
          </Col>
        </Row>

    </div>
  )
}

Footer.propTypes = {
  toggleBOH: PropTypes.func
}

export default Footer;