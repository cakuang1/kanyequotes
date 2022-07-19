import axios from 'axios';
import React,{Component, useState} from 'react';
import Button from './components/Button';
import Text from './components/Text';

const url = 'https://api.kanye.rest'


function App() {
  
  const [text,setText] = useState("");
  axios.get(url)

  return (
    <>
      <Text/>
      <Button/>
    </>
  )
}


export default App;
