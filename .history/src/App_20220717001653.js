import axios from 'axios';
import React,{useState} from 'react';


function Button() {
  return (
    <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
    </form>
);


}



function App() {

  return (
    <div className='container'>
      <h1>React Form Handling</h1>
      <form>
        <label>
          First Name: <input type="text" value={fname} onChange = {handleChange}/>
        </label>

      </form>
      <h5>First name: {fname}</h5>
    </div>
  )
}


export default App;
