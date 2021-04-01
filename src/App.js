import React from 'react';
import './App.css';
import Header from './headers/headers.js';
import Promo from './promo/promo.js';
import Section from './section/section.js';
import Reviews from './reviews/reviews.js';

function App() {
  return (
    <div className="APP">
      <Header />
      <Promo />
      <Section />
      <Reviews />
    </div> 
  );
}

export default App;
