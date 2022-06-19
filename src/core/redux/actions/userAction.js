import { addCustomer, getListUser } from "app/const/firebase";
import { GET_ALL_CUSTOMER_SUCCESS, GET_ALL_CUSTOMER_PENDING, GET_ALL_CUSTOMER_FAILED, ADD_CUSTOMER_PENDING, ADD_CUSTOMER_SUCCESS, ADD_CUSTOMER_FAILED } from "../constants/userConstants";

export const getAllUser = () => {
    return async function (dispatch) {
        dispatch({
            type: GET_ALL_CUSTOMER_PENDING,
        });
        getListUser("customer")
            .then((response) => {
                if (response.length) {
                    dispatch({
                        type: GET_ALL_CUSTOMER_SUCCESS,
                        payload: response,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_CUSTOMER_FAILED,
                    payload: error,
                });
            });
    };
};

export const newCustomer = ( customer) => {
    return async function(dispatch){
        dispatch({
            type:ADD_CUSTOMER_PENDING
        })
        addCustomer('customer',customer)
        .then((response) => {
            dispatch({
              type: ADD_CUSTOMER_SUCCESS,
            });
    
            dispatch(getAllUser());
          })
          .catch((error) => {
            dispatch({
              type: ADD_CUSTOMER_FAILED,
              payload: error,
            });
          });
    }
}