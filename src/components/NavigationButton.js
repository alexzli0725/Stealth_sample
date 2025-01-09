import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationButton = ({ path, label }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        navigate(`${path}`);
      }}
      className={`hover:text-green-500 ${
        location.pathname === `${path}` ? "text-green-500" : ""
      } border-[1.5px] px-[10px] py-[5px] rounded-[15px] border-green-500`}
    >
      {label}
    </button>
  );
};

export default NavigationButton;
