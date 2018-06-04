import axios from "axios";

const baseUrl = "http://localhost:4000/products";

export function fetchProducts() {
  return function(dispatch) {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
    return axios
      .get(baseUrl)
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
