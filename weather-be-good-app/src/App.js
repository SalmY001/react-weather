import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},UK&appid=40ca911e3bcfb024b6fdd0a7a808d47a`

const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url)
    .then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  }
}

  return (
    <div className="app">
      <div className='search'>
        <input value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyUp={searchLocation}
        placeholder='Enter Location'
        type='text'/>
      </div>
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
