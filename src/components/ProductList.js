import React from "react";
import Loading from "./Loading";
import Product from './Product';

const ProductList = props => {
  const { loading, products, addProduct } = props;

  if (loading) return <Loading />;

  return (
    <div className="products">
      {products.map(product =>
        <Product key={product.id} product={product} addProduct={addProduct}  />
      )}
    </div>
  )
};

export default ProductList;
