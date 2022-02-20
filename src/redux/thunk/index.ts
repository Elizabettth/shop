import axios from "axios";
import { Dispatch } from "redux";
import { ProductsActionTypes } from "../actions/products.actions";

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch: Dispatch) {
    dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
    try {
      const response = await axios(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx`);
      const products = response.data;
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: { products } });
    } catch (error) {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_ERROR, payload: { error } });
    }
  };
}
