import React, { Component } from "react";
import ProductListContainer from "../containers/ProductListContainer";
import BarContainer from "../containers/BarContainer";
import Header from './Header';

class Home extends Component {

  componentWillMount(){
    this.props.fetchProducts()
    this.props.fetchCategories()
  }

  render() {
    return (
      <div className="home">
        <Header title="Bayley Ilustration" subtitle="Art and Modern design"/>
        <ProductListContainer />
        <BarContainer />
      </div>
    )
  }
}

export default Home;
