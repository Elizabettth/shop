import React from "react";
import "./index.css";
import Button from "./../Common/Button";
import FeatureSection from "./../Common/Container";
import { useDispatch, useSelector } from "react-redux";
import Random from "./../Common/Random";
import { Link } from "react-router-dom";

const New = () => {
  return (
    <div className="New" id="new">
      <FeatureSection className="New__container container">
        <p className="New__text">New! New! New!</p>
        <Link className="New__link" to="/category">
          <Button className="New__btn" text="Go to the catalog" useIcon></Button>
        </Link>
      </FeatureSection>
      <div className="New_product">
        <Random />
        <Random />
        <Random />
      </div>
    </div>
  );
};

export default New;
