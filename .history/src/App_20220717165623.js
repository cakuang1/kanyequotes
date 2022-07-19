import axios from 'axios';
import React,{useState} from 'react';

const url = 'https://api.kanye.rest'







function Button() {
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(url).then(
      (response) => {
          var result = response.data;
          console.log(result);
          console.log(result.type)
      },
      (error) => {
          console.log(error);
      }
  );
}
  return (
    <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
    </form>
);
}


function Text() {
  <div className='text'>
      textplaceholder
  </div>
}





function App() {
  
  const [text,setText] = useState("");
  return (
    <>
      <Text/>
      <Button/>
    </>
  )
}


export default App;
