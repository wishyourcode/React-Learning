import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setdata] = useState([]);
  //using fetch method
  const getData = async () => {
    const response = await fetch(
      //free api or dummy api website json placeholder
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  };
  //using axios
  const getData2 = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(response.data);
  };
  const getData3 = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setdata(response.data);
    console.log(response.data);
  };
  return (
    <div className="Apicalling">
      Radhe Radhe <br />
      <button onClick={getData}>GetData</button>
      <br />
      <button onClick={getData2}>GetData second Way</button>
      <br />
      <button onClick={getData3}>GetData for image</button>
      <div>
        {data.map(function (element, idx) {
          return <h1 key={idx}>Radhe Radhe</h1>;
        })}
      </div>
    </div>
  );
};
export default App;
