import React from "react";function Button() {
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
  