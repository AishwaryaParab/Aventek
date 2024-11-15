import React from 'react';
import strip from "../images/strip.png";
import "./Strip.css";

const Strip = () => {
  return (
    <div className="strip-div">
      <img className="strip" src={strip} />
      <img className="strip" src={strip} />
    </div>
  )
}

export default Strip
