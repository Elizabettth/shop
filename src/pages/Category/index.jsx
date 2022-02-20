import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/thunk";
import Product from "../../components/Product";

function Category() {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector((state) => state.products);

  const [price, setPrice] = useState(20);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function handleSelect(event) {
    const category = event.target.value;
    setCategory(category);
  }

  return (
    <div className="categories">
      <form className="categories__fiter">
        <select className="categories__select" onChange={handleSelect}>
          <option className="categories__choice" value="all">
            all
          </option>
          <option className="categories__choice" value="mascara">
            mascara
          </option>
          <option className="categories__choice" value="eyebrow">
            eyebrow
          </option>
          <option className="categories__choice" value="eyeliner">
            eyeliner
          </option>
          <option className="categories__choice" value="foundation">
            foundation
          </option>
          <option className="categories__choice" value="bronzer">
            bronzer
          </option>
          <option className="categories__choice" value="blush">
            blush
          </option>
          <option className="categories__choice" value="lip_liner">
            lip liner
          </option>
          <option className="categories__choice" value="lipstick">
            lip stick
          </option>
          <option className="categories__choice" value="eyeshadow">
            eyeshadow
          </option>
        </select>
        {console.log(category)}
        <input
          min="0"
          max="20"
          step="1"
          className="filter__by-price"
          type="range"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <label>{price}</label>
      </form>
      <div className="categories__products">
        {isLoading ? (
          <h1 className="categories__products-loading">Loading..</h1>
        ) : (
          items.map(
            (item, index) =>
              (item.product_type === category || category === "all") && +item.price <= price && <Product item={item} key={index}></Product>
          )
        )}
      </div>
    </div>
  );
}

export default Category;
