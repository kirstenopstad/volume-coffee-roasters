import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import InventoryControl from './InventoryControl';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className='Site'>
          <InventoryControl />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
