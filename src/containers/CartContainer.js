import { connect } from "react-redux";
import Cart from '../components/Cart';
import { removeProduct } from '../actions/cart';

const mapStateToProps = state => {
  return {
    products: state.cart.productSelects,
  };
};

export default connect(mapStateToProps, {removeProduct})(Cart);
