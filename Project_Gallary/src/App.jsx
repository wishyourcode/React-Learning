import axios from "axios";
import { use, useEffect, useState } from "react";
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

  let printUserData = "No Picture Available";
  if (UserData.length > 0) {
    printUserData = UserData.map(function (element, idx) {
      return (
        <a href={element.url} target="_blank">
          <div>
            <div className="h-50 w-50 bg-amber-300 overflow-hidden rounded-2xl">
              <img
                key={idx}
                className="h-[85%] w-full object-center"
                src={element.download_url}
                alt=""
              />
              <h2 className="text-center">Author: {element.author}</h2>
            </div>
          </div>
        </a>
      );
    });
  }
  return (
    <div className="bg-red-300 overflow-auto h-screen">
      <h1 className="text-center text-2xl text-white bg-amber-900 h-10 flex justify-center">
        Radhe Radhe
      </h1>
      <br />
      <div className="flex flex-wrap p-2 gap-4">{printUserData}</div>
      <div className="flex justify-center gap-6 text-white items-center p-4">
        <button
          onClick={() => {
            if (Index > 1) {
              setIndex(Index - 1);
            }
          }}
          className="bg-amber-950 cursor-pointer active:scale-90 px-4 py-2 rounded gap-3"
        >
          Prev
        </button>
        <h2 className="bg-amber-900 p-1 rounded-2xl">{Index}</h2>
        <button
          onClick={() => {
            setIndex(Index + 1);
          }}
          className="bg-amber-950 cursor-pointer active:scale-90 px-4 py-2 rounded gap-3"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
