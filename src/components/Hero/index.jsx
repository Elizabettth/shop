import React from "react";
import "./index.css";
import Button from "./../Common/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__container container">
        <p className="Hero__text">For you from Nyx</p>
        <Link className="Hero__link" to="/category">
          <Button className="Hero__btn" text="learn more" useIcon></Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
