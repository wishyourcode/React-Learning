import axios from "axios";
import { use, useEffect, useState } from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
const App = () => {
  const [UserData, setUserData] = useState([]);
  const [Index, setIndex] = useState(2);
  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${Index}&limit=21`
    );
    setUserData(response.data);
  };
  //automatically called useEffect
  useEffect(
    function () {
      getdata();
    },
    [Index]
  );

  let printUserData = (
    <h2 className="text-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading .....
    </h2>
  );
  if (UserData.length > 0) {
    printUserData = UserData.map(function (element, idx) {
      return (
        <div key={idx}>
          <Card element={element} idx={idx} />
        </div>
      );
    });
  }
  return (
    <div>
      <Hero
        printUserData={printUserData}
        Index={Index}
        setIndex={setIndex}
        setUserData={setUserData}
      />
    </div>
  );
};

export default App;
