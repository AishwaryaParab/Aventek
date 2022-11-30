import React from 'react';
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CircleCta = ({cta, icon}) => {
  return (
    <div className="circle-cta">
        <div className="circle">
           <FontAwesomeIcon className="icon" icon={icon} />
        </div>

        <div className="cta">
          <p>{cta}</p>
        </div>
    </div>
  )
}

export default CircleCta