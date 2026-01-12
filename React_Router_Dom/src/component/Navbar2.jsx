import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();
  return (
    <div className="py-3 px-5 ">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="font-medium text-white bg-emerald-500 px-5 py-3 rounded m-2 cursor-pointer active:scale-95"
      >
        return to Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="font-medium text-white bg-emerald-500 px-5 py-3 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="font-medium text-white bg-emerald-500 px-5 py-3 rounded m-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
