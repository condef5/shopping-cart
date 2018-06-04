import { connect } from "react-redux";
import Cart from '../components/Cart';
import { removeProduct } from '../actions/cart';
import { removeMessage } from '../actions/cart';

const mapStateToProps = state => {
  return {
    products: state.cart.productSelects,
    message: state.cart.message,
  };
};

export default connect(mapStateToProps, {removeProduct, removeMessage})(Cart);
