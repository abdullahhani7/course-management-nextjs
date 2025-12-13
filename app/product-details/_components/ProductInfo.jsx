import React from "react";

const ProductInfo = ({ productDetails }) => {
  if (!productDetails) return null;
  const description =
    productDetails.description?.[0]?.children?.[0]?.text ?? "";
  return (
    <div>
      <h2>{productDetails.title}</h2>
      <h2>{productDetails.category}</h2>
      <h2>{description}</h2>
    </div>
  );
};

export default ProductInfo;
