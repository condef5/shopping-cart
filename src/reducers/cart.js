const initialState = {
  productSelects: [],
  amount: 0,
  message: ''
};

function productRepeat(products, product) {
  return products.filter(item => product.id == item.id).length > 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return productRepeat(state.productSelects, action.payload.product) ?
        { ...state, message: 'Repeated product'} :
        { ...state, productSelects: [{...action.payload.product, quantity: 1}, ...state.productSelects]}
    case "REMOVE_PRODUCT":
      const newProducts = state.productSelects.filter(item => item.id != action.payload.id)
      return {...state, productSelects: newProducts, message: 'Remove product'};
    case 'REMOVE_MESSAGE':
      return { ...state, message: ''};
    case "CHANGE_QUANTITY":
      return {}
    default:
      return state;
  }
};
