import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div key={product.id}> 
      <Image
        src={product?.banner?.url}
        alt="banner-card"
        width={400}
        height={350}
      />
    </div>
  );
};

export default ProductItem;
