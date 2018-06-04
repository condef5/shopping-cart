import { connect } from "react-redux";
import Cart from '../components/Cart';
import { removeProduct, removeMessage, changeQuantity } from '../actions/cart';

const amount = (products) => {
  var sum = 0;
  products.forEach(product => {
    sum += product.price * product.quantity;
  });
  return sum;
}

const mapStateToProps = state => {
  return {
    products: state.cart.productSelects,
    message: state.cart.message,
    amount: amount(state.cart.productSelects)
  };
};

export default connect(mapStateToProps, {removeProduct, removeMessage, changeQuantity})(Cart);
