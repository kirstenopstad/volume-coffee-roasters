import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import logo from './../img/logo.png'

const Footer = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="footer">
        <Row xs={1} md={3}>
          <Col className="contact-form">
            <Form>
                <Form.Group className="mb-3" controlId="formGroupSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" style={{ height: '100px' }} type="text" placeholder="Message" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="text" placeholder="Email" />
                </Form.Group>
                <Button variant="outline-light">Submit</Button>
              </Form>
          </Col>
          <Col className="toggle">
            <Form.Group>
              <Form.Check
                type="switch"
                id="toggle-check"
                title="FOH | BOH"
                onChange={(e) => setChecked(e.currentTarget.checked)}
              />
              <Form.Label>FOH {`<`}{`>`} BOH</Form.Label>
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

export default Footer;