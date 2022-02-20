import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";

const Random = () => {
  let random = Math.floor(Math.random() * 164);
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector((state) => state.products);
  return (
    <div className={`Random`}>
      {items.map(
        (item, index) =>
          index === random && (
            <div key={index} className="Random__products">
              <div className="Random__product">
                <img src={item.image_link} />
                <div className="Random__price">
                  <div>{item.price}</div>
                  <div>{item.price_sign}</div>
                </div>
                <div>{item.name}</div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Random;
