import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const CircleCta = ({ cta, icon, navigateto }) => {
  const navigate = useNavigate();

  return (
    <div className="circle-cta">
      <div className="circle">
        <FontAwesomeIcon className="icon" icon={icon} />
      </div>

      <div onClick={() => navigate(navigateto)} className="cta">
        <p>{cta}</p>
      </div>
    </div>
  );
};

export default CircleCta;
