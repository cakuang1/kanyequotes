import React, { useState } from "react";
import axios from "axios";



const url = 'https://api.kanye.rest'


export default function Button() {
    async function doGetRequest() {
        let res = await axios.get(url);
        console.log(res.data)
        return res.data
      }
    const [text,setText] = useState(doGetRequest());


    return (
    <>
      <form>
      <button type="submit">Generate New Quote</button>
      </form>
      <div className='text'>
        {text}
    </div>
    </>
  );
  }



  