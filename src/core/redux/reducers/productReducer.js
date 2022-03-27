import {
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_REQUESTING,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_REQUESTING,
  GET_PRODUCTS_SUCCESS,
} from "../constants/productConstants";

const initialState = {
  loading: false,
  error: "",
  productList: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUESTING: {
      state.loading = true;
      return { ...state };
    }

    case GET_PRODUCTS_SUCCESS: {
      state.loading = false;
      state.productList = action.payload;
      return { ...state };
    }

    case GET_PRODUCTS_FAILED: {
      state.loading = false;
      state.productList = [];
      return { ...state };
    }

    case ADD_PRODUCT_REQUESTING: {
      state.loading = true;

      return { ...state };
    }

    case ADD_PRODUCT_SUCCESS: {
      state.loading = false;
      return { ...state, productList: [...state.list, action.payload] };
    }

    case ADD_PRODUCT_FAILED: {
      state.loading = false;
      state.error = action.payload;

      return { ...state };
    }

    case DELETE_PRODUCT_SUCCESS: {
      let result = [...state.list];
      const index = result.findIndex((y) => y.id === action.payload);

      if (index !== -1) {
        result.splice(index, 1);
      }

      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
