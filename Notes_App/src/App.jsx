import React from "react";

const App = () => {
  return (
    <div className="bg-black text-white h-screen">
      <h1 className="w-full bg-amber-900 text-center text-5xl p-5 text-white">
        Radhe Radhe
      </h1>
      <form className="flex flex-col gap-10 p-10">
        <input
          className="border-2 rounded px-5 py-4 w-full"
          type="text"
          placeholder="Enter Notes Heading"
        />
        <input
          className="border-2 w-full rounded px-5 py-4"
          type="text"
          placeholder="Write details"
        />
        <button className="w-full border-2 px-5 py-3 rounded bg-white text-black font-bold">
          Add notes
        </button>
      </form>
    </div>
  );
};

export default App;
