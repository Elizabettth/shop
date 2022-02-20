import React from "react";
import "./index.css";
import Button from "./../Common/Button";
import FeatureSection from "../Common/Container";
import Random from "./../Common/Random";
import { Link } from "react-router-dom";

const Discounts = () => {
  return (
    <div className="Discounts" id="discounts">
      <FeatureSection className="Discounts__container container">
        <p className="Discounts__text">Discounts</p>
        <Link className="Discounts__link" to="/category">
          <Button className="Discounts__btn" text="Go to the catalog" useIcon></Button>
        </Link>
      </FeatureSection>
      <div className="Discounts__product">
        <Random />
        <Random />
        <Random />
      </div>
    </div>
  );
};

export default Discounts;
