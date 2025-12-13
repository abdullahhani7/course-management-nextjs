import Image from "next/image";
import React from "react";

const ProductBanner = ({ productDetails }) => {
  return (
    <div>
      {productDetails?.banner?.url && (
        <Image
          src={productDetails.banner.url}
          alt="product-details-banner"
          width={400}
          height={400}
          className=" rounded-lg"
        />
      )}
    </div>
  );
};

export default ProductBanner;
