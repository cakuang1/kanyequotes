import axios from 'axios';
import React,{useState} from 'react';




function App() {

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=sanfrancisco&appid=8b4c41ca9585c94ca791570267e7f977'


  const search
  return (
    <div className="app">
      <div>
        <form>
          <label>Enter your name:
          <input type="text" />
      </label>
    </form></div>
        <div className='container'>
          <div className='top'>
            <div className='location'>
              <p> Dallas</p>
            </div>
            <div className='temp'>
              <h1>65 degrees</h1>
            </div>
            <div className='description'>
              <p>Clouds</p>
            </div>
          </div>
          <div className='bottom'>
            <div  className = "feels">
              <p>65</p>
            </div>
            <div className='humidity'>
              <p>20%</p>
            </div>
            <div className='winds'>
              <p> 12mph</p>
            </div>

          </div>
        </div>
    </div>
  );
}

export default App;
