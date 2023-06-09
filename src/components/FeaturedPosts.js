import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Posts from './../components/PostSeedData'
import arrowRight from './../img/icons/arrow-right.svg'
import PostModal from "./PostModal";
import PropTypes from 'prop-types'

const FeaturedPosts = ({ selectedPost, handlePostClick, showPostModal, handleHideModal}) => {

  return(
    <>
    <Container>
      <a id="blog"/>
      <Row xs={1} md={2} className="mb-15">
      {Posts.map((post) => 
        <Col className="featured-post" key={post.featureOrder}>
          <img className="post" src={post.image} alt={post.caption} />
            <p style={{fontSize: 'small', textAlign: 'left'}}><i>Photo courtesy of {post.photoCredit}.</i></p>
          <h2>
            {post.title}{` `} 
            <span>
              {post.tagline}
            </span>
            <a href='#post'>
              <img 
                src={arrowRight} 
                alt="Click the arrow to read more." 
                style={{width: '20px', margin: '5px'}}
                onClick={() => handlePostClick(post)}/>
            </a>
          </h2>
        </Col>
      )}
      <PostModal
        show={showPostModal}
        post={selectedPost}
        onHide={handleHideModal}
        />
      </Row>
    </Container>
    </>
    
  )
}

FeaturedPosts.propTypes = {
  selectedPost: PropTypes.object,
  showPostModal: PropTypes.bool,
  handlePostClick: PropTypes.func,
  handleHideModal: PropTypes.func
}


export default FeaturedPosts;