import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/thunk";

function Product({ item }) {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector((state) => state.products);

  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("all");

  function onClickHandleCart() {}
  return (
    <div className="categories__product">
      <button onClick={onClickHandleCart}>add to cart</button>
      <div>
        <img src={item.image_link} />
        <div className="categories__price">
          <div>{item.price}</div>
          <div>{item.price_sign}</div>
        </div>
        <div className="categories__product">{item.name}</div>
      </div>
    </div>
  );
}

export default Product;
