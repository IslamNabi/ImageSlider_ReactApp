import React from 'react';
import ImageSlider from './Components/ImageSlider';
import Beach from './images/Beach.jpg';
import Greenery from './images/Greenery.jpg';
import Mountains from './images/mountains.jpg';
import city from './images/City.jpg';
import './App.css';

function App() {
  const slides = [
    { url: Beach, title: 'Beach' },
    { url: Greenery, title: 'Green' },
    { url: Mountains, title: 'Mountains' },
    { url: city, title: 'City' }
  ];

  const containerStyles = {
    width: '600px',
    height: '300px',
    margin: '0 auto'
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
      <h1>Image Slider</h1>
      </div>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
    </div>
  );
}

export default App;
