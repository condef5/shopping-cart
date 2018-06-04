import { connect } from "react-redux";
import ProductList from '../components/ProductList';
import { addProduct } from '../actions/cart';

function productFilter (products, selected){
  console.log(selected);
  switch (selected) {
    case 'all':
      return products;
    default:
      return products.filter(product => product.category.includes(selected))
  }
}

const mapStateToProps = state => {
  return {
    products: productFilter(state.product.list, state.categorie.selected),
    loading: state.product.loading
  };
};

export default connect(mapStateToProps, {addProduct})(ProductList);
