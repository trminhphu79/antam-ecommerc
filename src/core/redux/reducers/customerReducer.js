import { ADD_CUSTOMER_FAILED, ADD_CUSTOMER_PENDING, ADD_CUSTOMER_SUCCESS, GET_ALL_CUSTOMER_PENDING, GET_ALL_CUSTOMER_SUCCESS } from "../constants/userConstants";


const initialState = {
    loading: false,
    error: "",
    customerList: [],
};

export const CustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CUSTOMER_PENDING: {
            state.loading = true;
            return { ...state };
        }
        case GET_ALL_CUSTOMER_SUCCESS:{
            state.loading = false;
            state.customerList = action.payload
            return {...state}
        }

        case ADD_CUSTOMER_PENDING:{
            state.loading = true;
            return { ...state };
        }
        case ADD_CUSTOMER_SUCCESS:{
            state.loading = false;
            return { ...state };
        }
        case ADD_CUSTOMER_FAILED:{
            state.loading = false;
            state.error = "Không thành công"
            return { ...state };
        }
        default:
            return { ...state }
    }
};
