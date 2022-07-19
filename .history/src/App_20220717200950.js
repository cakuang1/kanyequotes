import axios from 'axios';
import React,{useState} from 'react';

const url = 'https://api.kanye.rest'









function Text(prop) {
  <div className='text'>
      {prop.text}
  </div>
}





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
