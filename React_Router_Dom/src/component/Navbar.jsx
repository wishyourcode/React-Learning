import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between font-bold p-4 text-white bg-emerald-900">
        <h2 className="text-2xl">Radhe Radhe</h2>
        <div className=" flex gap-4 text-xl font-bold">
          <Link to="/">Home </Link>
          <Link to="/About">About </Link>
          <Link to="/Contact">Contact </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
