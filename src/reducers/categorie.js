const initialState = {
  list: [],
  loading: false,
  selected: 'all'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_REQUEST":
    case "FETCH_CATEGORIES_FAILURE":
      return { ...state, loading: true };
    case "FETCH_CATEGORIES_SUCCESS":
      return { ...state, list: action.payload.categories, loading: false };
    case "SELECT_CATEGORIE":
      return { ...state, selected: action.payload.categorie}
    default:
      return state;
  }
};
