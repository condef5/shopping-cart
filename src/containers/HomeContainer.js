import { connect } from "react-redux";
import { fetchProducts } from "../actions/product";
import { fetchCategories } from "../actions/categorie";
import { removeMessage } from '../actions/cart';
import Home from '../components/Home';

const mapStateToProps = state => {
  return {
    message: state.cart.message,
  };
};

export default connect(mapStateToProps, { fetchProducts, fetchCategories, removeMessage })(Home);
