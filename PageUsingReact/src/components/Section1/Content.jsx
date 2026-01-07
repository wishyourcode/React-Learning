import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Content = (props) => {
  return (
    <div className=" h-[90vh] gap-5 flex items-center py-7 px-8">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Content;
