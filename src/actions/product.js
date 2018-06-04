import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL

export function fetchProducts() {
  return function(dispatch) {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
    return axios
      .get(`${baseUrl}/products`)
      .then(response => {
        dispatch({
          type: "FETCH_PRODUCTS_SUCCESS",
          payload: { products: response.data }
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_PRODUCTS_FAILURE" });
      });
  };
}
