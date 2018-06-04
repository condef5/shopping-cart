import { push } from 'react-router-redux'

export function removeProduct(id) {
  return {
    type: 'REMOVE_PRODUCT',
    payload: {
      id
    }
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