import React, { Component } from "react";
import ProductListContainer from "../containers/ProductListContainer";
import BarContainer from "../containers/BarContainer";
import Header from "./Header";
import Toast from './Toast';

class Home extends Component {
  componentWillMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  render() {
    const { message, removeMessage } = this.props;
    return (
      <div className="home">
        <Header title="Bayley Ilustration" subtitle="Art and Modern design" />
        <ProductListContainer />
        <BarContainer />
        { (message == '') ? null : <Toast message={message} removeToast={removeMessage}/>}
      </div>
    );
  }
}

export default Home;
