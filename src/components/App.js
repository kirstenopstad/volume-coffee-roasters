import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import InventoryControl from './InventoryControl';
import Container from 'react-bootstrap/Container';
import FeaturedProduct from './FeaturedProduct';
import FeaturedPosts from './FeaturedPosts';
import Cart from './Cart';
import posts from './PostSeedData'


function App() {
  const [showBOH, setShowBOH] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartSummary, setCartSummary] = useState({});
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});


  const toggleBOH = (showStatus) => {
    if (showStatus) {
      setShowBOH(false)
    } else {
      setShowBOH(true)
    }
  }

  const handlePostClick = (post) => {
    setSelectedPost(post)
    setShowPostModal(true)
  }
  
  const handleHideModal = () => {
    setShowPostModal(false)
  }

  const handleKnowYourStrengthClick = () => {
    let quizPost = posts.filter(p => p.title === "Know Your Strength")[0]
    setSelectedPost(quizPost);
    setShowPostModal(true)
  }

  const handleAddToCart = (item) => {
    // add item to cart
    const updatedCart = [...cart, item];
    // update cart
    setCart(updatedCart);
    // get updated cart summary
    const cartSum = getCartSummary(updatedCart);
    // distill to concise cart summary
    const conciseCart = getConciseCart(updatedCart, cartSum)
    // update cart summary
    setCartSummary(conciseCart)
  }
  
  const handleDecrementItemInCart = (item) => {
    // get first instance of this type of item
    const itemToRemove = cart.filter(i => i.id === item.id)[0]
    // get index of itemToRemove
    const indexToRemove = cart.indexOf(itemToRemove)
    // make copy of cart
    const updatedCart = [...cart]
    // splice it out of the cart
    updatedCart.splice(indexToRemove, 1)
    // update cart
    setCart(updatedCart)
    // get updated cart summary
    const cartSum = getCartSummary(updatedCart);
    // if anything in cart
    if (cart.length > 0) {
      // distill to concise cart summary
      const conciseCart = getConciseCart(updatedCart, cartSum)
      // update cart summary
      setCartSummary(conciseCart)
    }
  }
  
  const handleRemoveFromCart = (item) => {
    // make copy of cart that removes all instances of item
    const updatedCart = cart.filter(i => i.id != item.id)
    // update cart
    setCart(updatedCart)
    // get updated cart summary
    const cartSum = getCartSummary(updatedCart);
    // if anything in cart
    if (cart.length > 0) {
      // distill to concise cart summary
      const conciseCart = getConciseCart(updatedCart, cartSum)
      // update cart summary
      setCartSummary(conciseCart)
    }
  }
  
  // handleUpdateCart = () => {}
  // handleEmptyCart = () => {}
  
  // count instances of each type of item in cart and store qty of each
  const getCartSummary = (cart) => {
    // init Quantities
    let cartQuantities = {};
    // if anything is in the cart
    if (cart.length > 0) {
      // for each item in cart
      cart.forEach((item) => {
        // create array of cart keys
        let cartKeys = Object.keys(cartQuantities)
        // if item not in Qty object, 
        if (!cartKeys.includes(`${[item.id]}`)) {
          // add key to Quantities object and set value to one
          cartQuantities = {...cartQuantities, [item.id]: 1 }
          // else (if item in Qty object already)
        } else {
          // increment value by one
          const updatedItemQty = cartQuantities[item.id] + 1;
          cartQuantities = {...cartQuantities, [item.id]: updatedItemQty }
        }
      })
      return cartQuantities
    }
  }

  // use cart summary to build concise cart (just items that have been added to cart with quantity info)
  const getConciseCart = (cart, cartSummary) => {
    // add detailed object info to each obecjt in cartSummary
    if (cart.length > 0) {
      // init empty conciseCart array
      let conciseCart = [];
      // for each key in cartSummary
      Object.keys(cartSummary).forEach((key) => {
        // get item to copy in by filtering by id
        let itemDetails = cart.filter(i => i.id === key)[0]
        // get quantity of that item
        let qty = cartSummary[key]
        // get itemSummary
        let itemSummary = {...itemDetails, quantity: qty}
        // add itemSummary obj to concise Cart
        conciseCart = [...conciseCart, itemSummary]
      })
      return conciseCart
    }
  } 

  // conditional rendering
  let main = null;
  // show FOH or BOH components based on toggle
  if (!showBOH) {
    // show FOH
    main = 
    <>
    <FeaturedProduct />
    <FeaturedPosts 
      handlePostClick={handlePostClick} 
      selectedPost={selectedPost}
      showPostModal={showPostModal}
      handleHideModal={handleHideModal}/>
    <InventoryControl 
      showBOH={showBOH} 
      handleAddToCart={handleAddToCart}
      handleRemoveFromCart={handleRemoveFromCart} />
    </>
  } else {
    // show BOH
    main = 
    <>
    <h2 className='text-center p-3'>Inventory Control</h2>
    <InventoryControl showBOH={showBOH}/>
    </>
  }
  // if anything in cart, show cart icon
  let showCart = null;
  if (cart.length > 0) {
    showCart = <Cart 
      cart={cart} 
      cartSummary={cartSummary}
      onRemoveFromCart={handleRemoveFromCart}
      onDecrementFromCart={handleDecrementItemInCart}
      onAddToCart={handleAddToCart}/>
  }

  return (
    <React.Fragment>
      <Header handleKnowYourStrengthClick={handleKnowYourStrengthClick}/>
      <Container>
        <div className='Site'>
          {main}
          {showCart}
        </div>
      </Container>
      <Footer toggleBOH={toggleBOH} />
    </React.Fragment>
  );
}

export default App;
