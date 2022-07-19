import React, { useState } from "react";
import axios from "axios";



const url = 'https://api.kanye.rest'


export default function Button() {
    async function doGetRequest() {

        let res = await axios.get(url);
        return res.data
      }
    const [text,setText] = useState(axios.get);


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



  