import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Posts from './../components/PostSeedData'
import arrowRight from './../img/icons/arrow-right.svg'
import PostModal from "./PostModal";

const FeaturedPosts = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});

  const handlePostClick = (post) => {
    setSelectedPost(post)
    setModalShow(true)
  }

  return(
    <>
    <Container>
      <Row xs={1} md={2}>
      {Posts.map((post) => 
        <Col className="featured-post" key={post.featureOrder}>
          <img src={post.image} alt={post.caption} />
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
        show={modalShow}
        post={selectedPost}
        onHide={() => setModalShow(false)}
        />
      </Row>
    </Container>
    </>
    
  )
}

export default FeaturedPosts;