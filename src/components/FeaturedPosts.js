import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Posts from './../components/PostSeedData'
import arrowRight from './../img/icons/arrow-right.svg'

const FeaturedPosts = () => {
  return(
    <>
    <Container>
      <Row xs={1} md={2}>
      {Posts.map((post) => 
        <Col className="featured-post">
          <img src={post.image} alt={post.caption}/>
          <caption style={{fontSize: 'small'}}><i>Photo courtesy of {post.photoCredit}.</i></caption>
          <h2>
            {post.title}{` `} 
            <span>
              {post.tagline}
            </span>
            <a href='#post'>
              <img src={arrowRight} alt="Click the arrow to read more." style={{width: '20px', margin: '5px'}}/>
            </a>
          </h2>
        </Col>
      )}
      </Row>
    </Container>
    </>
    
  )
}

export default FeaturedPosts;