import {
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_REQUESTING,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_REQUESTING,
  GET_PRODUCTS_SUCCESS,
} from "../constants/productConstants";

import { create, getList } from "app/const/firebase";
import { CreateToast } from "app/page/utils/createToast";

export const addProductAction = (data) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_REQUESTING,
    });

    create("product", data)
      .then((response) => {
        dispatch({
          type: ADD_PRODUCT_SUCCESS,
          payload: data,
        });

        CreateToast("success", "Tạo thông tin thành công.");
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCT_FAILED,
          payload: error,
        });
        CreateToast("error", "Tạo thông tin thất bại.");
      });
  };
};

export const deleteAction = (id) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: id,
    });
  };
};

export const getAllProductAction = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_PRODUCTS_REQUESTING,
    });

    getList("product")
      .then((response) => {
        console.log("response", response);

        if (response.length) {
          dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: response,
          });
        }

        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: GET_PRODUCTS_FAILED,
          payload: error,
        });
      });
  };
};
