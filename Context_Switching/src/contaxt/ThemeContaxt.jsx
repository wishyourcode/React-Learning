import React, { createContext } from "react";
export const ThemeDataContext = createContext();
const ThemeContaxt = (props) => {
  return (
    <div>
      <ThemeDataContext.Provider value="Krishna JI">
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContaxt;
