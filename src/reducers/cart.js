const initialState = {
  productSelects: [],
  amount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      // const product = {...action.payload.product, quantity: 1};
      return { ...state, productSelects: [action.payload.product, ...state.productSelects] };
    case "REMOVE_PRODUCT":
      const newProducts = state.productSelects.filter(item => item.id != action.payload.id)
      return {...state, productSelects: newProducts};
    case "CHANGE_QUANTITY":
      return {}
    default:
      return state;
  }
};
