import React, { useState } from "react";
import axios from "axios";



const url = 'https://api.kanye.rest'


export default function Button() {
    const [text,setText] = useState("")
    
    return (
    <>
      <form>
      <button type="submit">Generate New Quote</button>
      </form>
      <div className='text'>
        
    </div>
    </>
  );
  }



  