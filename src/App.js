import React from 'react';
import './App.css';
import Header from './headers/headers.js';
import Promo from './promo/promo.js';
import Section from './section/section.js';

function App() {
  return (
    <div className="APP">
      <Header />
      <Promo />
      <Section />
    </div> 
  );
}

export default App;
