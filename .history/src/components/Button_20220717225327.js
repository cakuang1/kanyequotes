import React from "react";
import axios from "axios";



const url = 'https://api.kanye.rest'

export default function Button() {
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
    return (
    
      <form onSubmit={handleSubmit}>
      <button type="submit">Generate New Quote</button>
      </form>
  );
  }



  