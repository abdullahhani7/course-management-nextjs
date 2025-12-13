import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ productList }) => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {productList.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
