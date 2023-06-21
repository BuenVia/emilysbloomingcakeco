import React from 'react';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className='image-section' >Baking Delightful Memories</div>

      <div>
        <p>Email: hello@emilysbloomingcakecompany.co.uk</p>
        <p>Tel: 07956 689654</p>
      </div>
    </div>
  );
}

export default App