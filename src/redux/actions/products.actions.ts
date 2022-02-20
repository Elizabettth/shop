import { Product } from "../reducers/products.reducers";

//action types
export enum ProductsActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
}

//actions
export interface FetchProducts {
  type: ProductsActionTypes.FETCH_PRODUCTS;
}

export interface FetchProductsError {
  type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
  payload: { error: any };
}

export interface FetchProductsSuccess {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: { products: Product[] };
}

//type of all actions
export type ProductsActions = FetchProducts | FetchProductsError | FetchProductsSuccess;
