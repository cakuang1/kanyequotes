import axios from 'axios';
import React,{useState} from 'react';




function App() {
  const [name,setName] = useState("");
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=sanfrancisco&appid=8b4c41ca9585c94ca791570267e7f977'

  const searchlocation = (event) => {




function App() {
  const [fname, setFname] = useState("")

  return (
    <div>
      <h1>React Form Handling</h1>
      <form>
        <label>
          First Name: <input type="text" value={fname} />
        </label>
      </form>
      <h5>First name: {fname}</h5>
    </div>
  )
}


export default App;
