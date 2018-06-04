import axios from 'axios';

const baseUrl = 'http://localhost:4000/categories';

export function selectCategorie(categorie) {
  return {
    type: 'SELECT_CATEGORIE',
    payload: {
      categorie
    }
  }
}

export function fetchCategories() {
    return function(dispatch) {
      dispatch({type: "FETCH_CATEGORIES_REQUEST"});
      return axios.get(baseUrl)
        .then((response) => {
          dispatch({type: "FETCH_CATEGORIES_SUCCESS", payload: {categories: ['all', ...response.data]}})
        })
        .catch((err) => {
          dispatch({type: "FETCH_CATEGORIES_FAILURE" })
        })
    }
  }
