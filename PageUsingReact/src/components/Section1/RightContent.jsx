import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div className="w-2/3 h-full overflow-x-auto p-6 flex flex-nowrap gap-7">
      {props.users.map(function (elements, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={elements.img}
            intro={elements.intro}
            tags={elements.tags}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
