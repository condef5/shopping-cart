import { push } from 'react-router-redux'

export function removeProduct(id) {
  return {
    type: 'REMOVE_PRODUCT',
    payload: {
      id
    }
  }
}

export function removeMessage() {
  return {
    type: 'REMOVE_MESSAGE',
  }
}

export function addProduct(product) {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      product
    }
  }
}

export function changeQuantity(id, quantity) {
  return {
    type: 'CHANGE_QUANTITY',
    payload: {
      id,
      quantity
    }
  }
}
