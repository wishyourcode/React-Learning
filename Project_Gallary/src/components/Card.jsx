import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.element.url} target="_blank">
        <div>
          <div className="h-50 w-50 bg-amber-300 overflow-hidden rounded-2xl">
            <img
              key={props.idx}
              className="h-[85%] w-full object-center"
              src={props.element.download_url}
              alt=""
            />
            <h2 className="text-center">Author: {props.element.author}</h2>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
