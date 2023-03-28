import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import InventoryControl from './InventoryControl';
import Container from 'react-bootstrap/Container';
import FeaturedProduct from './FeaturedProduct';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className='Site'>
          <FeaturedProduct />
          <InventoryControl />
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
