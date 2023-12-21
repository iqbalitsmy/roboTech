import axios from "axios"
import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS
} from "../constant/productConstant"


// get all product 
export const getProducts = (keyword = " ") => async (dispatch) => {

    try {

        dispatch({ type: ALL_PRODUCT_REQUEST })
        let link = `http://localhost:5000/api/v1/products?keyword=${keyword}`
        const { data } = await axios.get(link)
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error?.error.response.data.message
        })
    }

}

// get a single products
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error?.error.response.data.message
        })
    }
}