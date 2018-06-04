import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Toast from "./Toast";
import ProductsCart from './ProductsCart';

const Cart = props => {
  const { products, removeProduct, message, removeMessage, amount, changeQuantity } = props;
  return (
    <div className="page page__cart">
      <Header title="Cart" />
      {products.length == 0 ? (
        <div className="cart__null">Empty cart</div>
      ) : (
        <ProductsCart products={products} removeProduct={removeProduct} amount={amount} changeQuantity={changeQuantity} />
      )}
      <div className="table__pdt">
        <Link to="/">Continue shopping</Link>
      </div>
      {message == "" ? null : (
        <Toast message={message} removeToast={removeMessage} />
      )}
    </div>
  );
};

export default Cart;
