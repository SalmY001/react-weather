import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import reportWebVitals from './reportWebVitals';

function App() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=Birmingham,UK&appid=40ca911e3bcfb024b6fdd0a7a808d47a`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Birmingham</p>
          </div>
          <div className="country">
            <p>GB</p>
          </div>
          <div className="temp">
            <h1>200°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels_like">
            <p className='bold'>201°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>25%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>15 MPH</p>
            <p>Wind Speed</p>
          </div>

        </div>

        
      </div> 

      
    
    </div>
  );
}

export default App;
