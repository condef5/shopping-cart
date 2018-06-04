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
        { ...state, message: 'Producto repetido'} :
        { ...state, productSelects: [{...action.payload.product, quantity: 1}, ...state.productSelects], message: '' }
    case "REMOVE_PRODUCT":
      const newProducts = state.productSelects.filter(item => item.id != action.payload.id)
      return {...state, productSelects: newProducts};
    case "CHANGE_QUANTITY":
      return {}
    default:
      return state;
  }
};
