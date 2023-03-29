import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import InventoryControl from './InventoryControl';
import Container from 'react-bootstrap/Container';
import FeaturedProduct from './FeaturedProduct';
import FeaturedPosts from './FeaturedPosts';

function App() {
  const [showBOH, setShowBOH] = useState(false);

  const toggleBOH = (showStatus) => {
    if (showStatus) {
      setShowBOH(false)
    } else {
      setShowBOH(true)
    }
  }

  // conditional rendering
  let main = null;
  if (!showBOH) {
    // show FOH
    main = 
    <>
    <FeaturedProduct />
    <FeaturedPosts />
    <InventoryControl showBOH={showBOH}/>
    </>
  } else {
    // show BOH
    main = 
    <>
    <h2 className='text-center p-3'>Inventory Control</h2>
    <InventoryControl showBOH={showBOH}/>
    </>
  }

  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className='Site'>
          {main}
        </div>
      </Container>
      <Footer toggleBOH={toggleBOH} />
    </React.Fragment>
  );
}

export default App;
