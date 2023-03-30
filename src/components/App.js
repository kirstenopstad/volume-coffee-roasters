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


function App() {
  const [showBOH, setShowBOH] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleBOH = (showStatus) => {
    if (showStatus) {
      setShowBOH(false)
    } else {
      setShowBOH(true)
    }
  }

  const handleAddToCart = (item) => {
    let updatedCart = [...cart, item];
    setCart(updatedCart)
  }
  
  // handleRemoveFromCart = (item) => {}
  // handleUpdateCart = () => {}
  // handleEmptyCart = () => {}
  
  // count instances of each type of item in cart and store qty of each
  const sortCart = (cart) => {
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

  // conditional rendering
  let main = null;
  // show FOH or BOH components based on toggle
  if (!showBOH) {
    // show FOH
    main = 
    <>
    <FeaturedProduct />
    <FeaturedPosts />
    <InventoryControl showBOH={showBOH} handleAddToCart={handleAddToCart}/>
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
    showCart = <Cart cart={cart}/>
  }

  return (
    <React.Fragment>
      <Header />
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
