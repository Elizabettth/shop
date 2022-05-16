import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Discounts from "../../components/Discounts";
import Hero from "../../components/Hero";
import Hits from "../../components/Hits";
import New from "../../components/New";
import { fetchProducts } from "../../redux/thunk";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <div className="container">
        <New />
        <Hits />
        <Discounts />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
