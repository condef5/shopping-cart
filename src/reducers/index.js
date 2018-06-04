import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import product from './product'
import categorie from './categorie.js'
import cart from './cart.js'

export default combineReducers({
  routing: routerReducer,
  product,
  categorie,
  cart
})
