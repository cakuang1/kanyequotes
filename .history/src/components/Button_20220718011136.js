import React from "react";
import axios from "axios";



const url = 'https://api.kanye.rest'

function handleSubmit(event) {
    event.preventDefault();
    axios.get(url).then(
      (response) => {
          var result = response.data;
          console.log(result);

      },
      (error) => {
          console.log(error);
      }
  );
}

export default function Button() {

    return (
    <>
      <form onSubmit={handleSubmit}>
      <button type="submit">Generate New Quote</button>
      </form>
      <div className='text'>
        {prop.text}
    </div>
    </>
  );
  }



  