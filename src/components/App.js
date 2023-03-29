import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import InventoryControl from './InventoryControl';
import Container from 'react-bootstrap/Container';
import FeaturedProduct from './FeaturedProduct';

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
    <InventoryControl showBOH={showBOH}/>
    </>
  } else {
    // show BOH
    main = <InventoryControl showBOH={showBOH}/>
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
