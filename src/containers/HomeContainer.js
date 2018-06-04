import { connect } from "react-redux";
import { fetchProducts } from "../actions/product";
import { fetchCategories } from "../actions/categorie";
import Home from '../components/Home';

export default connect(null, {fetchProducts, fetchCategories})(Home);
