import React from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';

const ProductsCart = ({ products, removeProduct }) => (
  <div className="cart__container">
    <div className="table__header">
      <div>Product</div>
      <div>Quantity</div>
      <div>Price</div>
    </div>
    {products.map(product => (
      <div className="table__cell" key={product.id}>
        <div className="table__info">
          <div style={{ marginRight: "10px" }}>
            <img
              src={product.image + "?auto=format&fit=max&h=105&w=100"}
              alt={product.name}
            />
          </div>
          <h4>{product.name}</h4>
        </div>
        <div>
          <input type="number" />
          <a href="#" onClick={() => removeProduct(product.id)}>Remove</a>
        </div>
        <div>${product.price}.00</div>
      </div>
    ))}
    <div className="table__footer">
      <div>Total</div>
      <div>$20.00</div>
    </div>
  </div>
);

const Cart = props => {
  const { products, removeProduct } = props;
  return (
    <div className="page page__cart">
      <Header title="Cart" />
      {products.length == 0 ?
        <div className="cart__null">Empty cart</div> :
        <ProductsCart products={products} removeProduct={removeProduct} />
      }
      <div className="table__pdt">
        <Link to="/">Continue shopping</Link>
      </div>
    </div>
  );
};

export default Cart;
