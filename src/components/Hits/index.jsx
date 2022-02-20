import React from "react";
import "./index.css";
import Button from "./../Common/Button";
import FeatureSection from "../Common/Container";
import Random from "./../Common/Random";
import { Link } from "react-router-dom";

const Hits = () => {
  return (
    <div className="Hits" id="hits">
      <div className="Hits__product">
        <Random />
        <Random />
        <Random />
      </div>

      <FeatureSection className="Hits__container container">
        <p className="Hits__text">Best sellers</p>
        <Link className="Hits__link" to="/category">
          <Button className="Hits__btn" text="Go to the catalog" useIcon></Button>
        </Link>
      </FeatureSection>
    </div>
  );
};

export default Hits;
