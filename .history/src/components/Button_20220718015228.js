import React, { useState } from "react";
import axios from "axios";




const url = 'https://api.kanye.rest'


export default function Button() {

    const [text,setText] = useState('');

    function handleClick() {
        setText('hello');

    }

    return (
    <>
      <form>
      <button onClick={handleClick} >Generate New Quote</button>
      </form>
      <div className='text'>
        {text}
    </div>
    </>
  );
  }



  