import { useState } from "react";
import { X } from "lucide-react";
const App = () => {
  const [title, settitle] = useState("");
  const [detailed, setdetailed] = useState("");
  const [Task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(detailed);
    settitle("");
    setdetailed("");
    const copyTask = [...Task];
    copyTask.push({ title, detailed });
    setTask(copyTask);
  };
  const deleteme = (idx) => {
    const copyTask = [...Task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="bg-black text-white">
      <h1 className="w-full bg-amber-900 text-center text-5xl p-5 text-white">
        Radhe Radhe
      </h1>
      <div className="py-10 flex justify-center gap-10">
        <div className="flex  rounded-2xl w-1/2 bg-amber-950 m-5 p-5">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col w-full gap-10 p-3"
          >
            <input
              className="border-2 rounded px-5 py-4 w-full"
              type="text"
              placeholder="Enter Notes Heading"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            <textarea
              className="border-2 w-full h-32 rounded px-5 py-4"
              type="text"
              placeholder="Write details"
              value={detailed}
              onChange={(e) => {
                setdetailed(e.target.value);
              }}
            />
            <button className="w-full border-2 px-5 py-3 rounded bg-white text-black font-bold">
              Add notes
            </button>
          </form>
        </div>
        <div className=" w-80 rotate-y-180">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
            alt=""
          />
        </div>
      </div>
      <div className="h-screen">
        <h1 className="w-full bg-amber-900 text-center text-5xl py-5 text-white">
          Radhe Radhe
        </h1>
        <div className="flex flex-row overflow-hidden w-full">
          {Task.map(function (element, idx) {
            return (
              <div
                key={idx}
                className="h-50 relative flex flex-col items-start justify-between m-10 w-45 rounded-2xl  text-black bg-cover bg-amber-50  "
              >
                <h2 className="font-bold text-center m-3 text-xl">
                  {element.title}
                </h2>
                <p className="m-3 leading-tight text-lg ">{element.detailed}</p>
                <button
                  onClick={() => {
                    deleteme(idx);
                  }}
                  className="w-40 cursor-pointer rounded active:scale-95 p-1 m-3 bg-red-500"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
