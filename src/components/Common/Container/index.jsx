import React from "react";
import "./index.css";

const FeatureSection = ({ children, ...props }) => {
  return <div className={`FeatureSection ${props.className}`}>{children}</div>;
};

export default FeatureSection;
