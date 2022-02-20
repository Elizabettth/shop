import { combineReducers } from "redux";
import cartReducer from "./cart.reducers";
import productsReducer from "./products.reducers";

export const rootReducer = combineReducers({ cart: cartReducer, products: productsReducer });
