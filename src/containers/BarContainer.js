import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "react-router-redux";
import Bar from "../components/Bar";
import { selectCategorie } from '../actions/categorie';

const mapStateToProps = state => {
  return {
    categories: state.categorie.list,
    loading: state.categorie.loading,
    selected: state.categorie.selected,
    quantity: state.cart.productSelects.length
  };
};

const changePageCart = () => {
  return push("/cart");
}


export default connect(mapStateToProps, {changePageCart, selectCategorie})(Bar);
