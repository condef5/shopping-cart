import React from 'react';
import { IconCart } from '../utils/Icons';

const Product = ({product, addProduct}) => (
  <div className="product">
    <div className="product__box">
      <img src={product.image} alt="" style={{width: "100%"}} />
    </div>
    <div className="product__meta">
      <h3 className="product__title">{product.name}</h3>
      <span className="product__price">${product.price}.00</span>
    </div>
    <span className="product__action" onClick={() => addProduct(product)} >
      <IconCart nameClass="product__icon" />
    </span>
  </div>
)

export default Product;
