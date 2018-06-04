import React, { Component } from "react";

class ProductsCart extends Component {
  constructor() {
    super();
    this.changeQuantity = (id, ev) => {
      if(ev.target.value <= 0) { alert('Invalid quantity'); return; }
      this.props.changeQuantity(id, ev.target.value)
    }
  }

  render() {
    const { products, removeProduct, amount } = this.props;
    return (
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
              <input
                type="number"
                value={product.quantity}
                onChange={(e) => this.changeQuantity(product.id, e)}
              />
              <a href="#" onClick={() => removeProduct(product.id)}>
                Remove
              </a>
            </div>
            <div>${product.price}.00</div>
          </div>
        ))}
        <div className="table__footer">
          <div>Total</div>
          <div>${amount}.00</div>
        </div>
      </div>
    );
  }
}

export default ProductsCart;
