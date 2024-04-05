import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  //fetch weather conditions using api
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&{country}&units=metric&appid=d81b4abec14d3e396ac406c839ae4bcb`

const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url)
    .then((response) => {
      setData(response.data)
    })
    setLocation('') // Clear input box after execution
  }
}
  // return weather location data from user input
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
        {/* populate key weather conditions near top of screen*/}
        <div className="top"> 
          <div className="location">
            {data.name ? <p>{data.name}, {data.sys.country}</p> : null}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && // Clear screen
        //add addition weather conditions towards bottom of screen
        <div className="bottom"> 
          <div className="feels_like">
           {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
