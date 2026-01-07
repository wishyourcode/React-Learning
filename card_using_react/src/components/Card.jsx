import React from "react";
import { Bookmark } from "lucide-react";
const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.img} alt="logo" />
          <p>Radhe Radhe</p>

          <button>
            <Bookmark />
            Save
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.jobPosted}</span>
          </h3>
          <h1>{props.designation}</h1>
          <div className="tags">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom_left">
          <h4>${props.pay}/hr</h4>
          <h4>{props.location}</h4>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
