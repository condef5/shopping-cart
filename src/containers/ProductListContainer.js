import { connect } from "react-redux";
import ProductList from '../components/ProductList';
import { addProduct } from '../actions/cart';
import { productFilter } from '../reducers/product';

const mapStateToProps = state => {
  return {
    products: productFilter(state.product.list, state.categorie.selected),
    loading: state.product.loading
  };
};

export default connect(mapStateToProps, {addProduct})(ProductList);
