import React from "react";

const App = () => {
  const getData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      Radhe Radhe <br />
      <button onClick={getData}>GetData</button>
    </div>
  );
};

export default App;
