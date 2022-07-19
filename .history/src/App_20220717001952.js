import axios from 'axios';
import React,{useState} from 'react';

const url = 'https://api.kanye.rest'


function Button() {
  function handleSubmit() {
    axios.get()

  }


  return (
    <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
    </form>
);


}



function App() {

  return (
    <Button/>
  )
}


export default App;
