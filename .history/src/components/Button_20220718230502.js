import React, { useState } from "react";
import axios from "axios";




const url = 'https://api.kanye.rest'


export default function Button() {

    const [text,setText] = useState('');
    
    function handleClick(event) {
        event.preventDefault()
        axios.get(url).then((response) => {
            setText(response.data.quote)
        })
    }

    return (

    <>
      <div className='text'>
        {text}
      </div>
      <form>
        <button onClick={handleClick} >Generate New Quote</button>
      </form>

    </>
  );
  }



  