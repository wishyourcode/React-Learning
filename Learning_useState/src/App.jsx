import { useState } from "react";
const App = () => {
  let [num, setnum] = useState(10);
  function increase() {
    setnum(num + 1);
  }
  function decrease() {
    setnum(num - 1);
  }
  return (
    <div>
      Radhe Radhe
      <div className="count">
        <h1 className="value"> {num}</h1>
        <button onClick={increase}>Increase </button>
        <button onClick={decrease}>Decrease </button>
      </div>
    </div>
  );
};

export default App;
