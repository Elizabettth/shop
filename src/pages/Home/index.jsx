import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Discounts from "../../components/Discounts";
import Hero from "../../components/Hero";
import Hits from "../../components/Hits";
import New from "../../components/New";
import { fetchProducts } from "../../redux/thunk";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <New />
        <Hits />
        <Discounts />
      </div>
    </div>
  );
};

export default Home;
