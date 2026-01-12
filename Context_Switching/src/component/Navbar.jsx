import React, { useContext } from "react";
import Navbar2 from "./Navbar2";
import { ThemeDataContext } from "../contaxt/ThemeContaxt";
const Navbar = (props) => {
  const data = useContext(ThemeDataContext);
  console.log(data);
  return (
    <div className=" flex justify-between px-6 align-center items-center text-white">
      <h2 className="text-center font-bold">{data}</h2>
      <Navbar2 />
    </div>
  );
};

export default Navbar;
