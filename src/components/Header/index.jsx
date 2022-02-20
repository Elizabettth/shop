import React from "react";
import "./index.css";
import { Link as LinkRRD } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    <div className="Header__container Header__list">
      <LinkRRD className="Header__link" to="/category">
        Catalog
      </LinkRRD>
      <Link activeClass="active" className="Header__link" to="new" spy={true} smooth={true} offset={-70} duration={500}>
        New
      </Link>
      <Link activeClass="active" className="Header__link" to="hits" spy={true} smooth={true} offset={-70} duration={500}>
        Hits
      </Link>
      <Link activeClass="active" className="Header__link" to="discounts" spy={true} smooth={true} offset={-70} duration={500}>
        Discounts
      </Link>
    </div>
  );
};

export default Header;
