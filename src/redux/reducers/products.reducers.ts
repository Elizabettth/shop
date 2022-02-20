import { ProductsActions, ProductsActionTypes } from "../actions/products.actions";

export interface Color {
  hex_value: string;
  colour_name: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  price_sign: string;
  image_link: string;
  description: string;
  category: string | null;
  product_type: string;
  product_colors: Color[];
}

export interface ProductsState {
  isLoading: boolean;
  items: Product[];
  error: any;
}

const initialState: ProductsState = {
  isLoading: false,
  items: [],
  error: null,
};

export default function productsReducer(state: ProductsState = initialState, action: ProductsActions) {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      return { ...state, isLoading: true };
    case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, items: action.payload.products };
    default:
      return state;
  }
}
