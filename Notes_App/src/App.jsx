import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit button is clicked");
  };
  return (
    <div className="bg-black text-white h-screen">
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
            />
            <textarea
              className="border-2 w-full h-32 rounded px-5 py-4"
              type="text"
              placeholder="Write details"
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
    </div>
  );
};

export default App;
