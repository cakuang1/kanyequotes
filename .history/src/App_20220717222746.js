import axios from 'axios';
import React,{useState} from 'react';
import Button from comp

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
