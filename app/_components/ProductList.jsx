import React from "react";

const ProductList = ({ productList }) => {
  return (
    <div>
      {productList.map((product) => (
        <div>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductList;
