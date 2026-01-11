import axios from "axios";
import { use, useEffect, useState } from "react";
const App = () => {
  const [UserData, setUserData] = useState([]);
  const getdata = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=20"
    );
    setUserData(response.data);
  };
  useEffect(function () {
    getdata();
  }, []);

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
      Radhe Radhe
      <br />
      <div className="flex flex-wrap gap-4">{printUserData}</div>
    </div>
  );
};

export default App;
