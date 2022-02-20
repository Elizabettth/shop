import React from "react";
import "./index.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Button = ({ text, useIcon, ...props }) => {
  return (
    <button className={`Button ${props.className}`}>
      <p className="Button__text">{text}</p>
      {useIcon && <ArrowForwardIosIcon className="Button__arrow" />}
    </button>
  );
};

export default Button;
