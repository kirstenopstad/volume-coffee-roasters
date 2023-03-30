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
import cartIcon from './../img/icons/cart.svg'


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
