import React from "react";
import axios from "axios";



const url = 'https://api.kanye.rest'

export default function Button() {

    return (
    <>
      <form onSubmit={handleSubmit}>
      <button type="submit">Generate New Quote</button>
      </form>
    </>
  );
  }



  