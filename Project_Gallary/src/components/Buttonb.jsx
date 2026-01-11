import React from "react";

const Buttonb = (props) => {
  const { Index, setIndex, setUserData } = props;
  return (
    <div>
      <div className="flex justify-center gap-6 text-white items-center p-4">
        <button
          onClick={() => {
            if (Index > 1) {
              setIndex(Index - 1);
              setUserData([]);
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
            setUserData([]);
          }}
          className="bg-amber-950 cursor-pointer active:scale-90 px-4 py-2 rounded gap-3"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Buttonb;
