import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import featuredImage from './../img/stock/featuredProduct.jpg';

const FeaturedProduct = () => {
  return(
    <>
    <Container>
      <Row md={2} className="featured-product">
        <Col>
          <img src={featuredImage} alt="Primo Blend – A smooth roast, drinkable all day." className="featured-img"></img>
        </Col>
        <Col>
          <h2>Featured Blend</h2>
          <h3>A smooth, all-day drinker.</h3>
          <Button variant="outline-dark" href="#order">Get Blend</Button>
        </Col>
      </Row>

    </Container>
    </>
    
  )
}

export default FeaturedProduct;