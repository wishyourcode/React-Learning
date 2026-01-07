import React from "react";
import { ArrowRight } from "lucide-react";
const RightCard = (props) => {
  return (
    <div className="h-full overflow-hidden shrink-0 relative w-80 rounded-4xl">
      <img className="h-full w-80 object-cover" src={props.img} alt="image" />
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between p-5">
        <h2 className="bg-white rounded-full text-2xl h-12 w-12 flex justify-center items-center font-bold">
          {props.id + 1}
        </h2>
        <div>
          <p className="text-lg leading-normal text-white mb-10">
            {props.intro}
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-full">
              {props.tags}
            </button>
            <button className="bg-blue-600 text-white font-medium rounded-full">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
