import Image from "next/image";
import React from "react";

const ProductBanner = ({ productDetails }) => {
  return (
    <div >
      {productDetails?.banner?.url ? (
        <Image
          src={productDetails.banner.url}
          alt="product-details-banner"
          width={400}
          height={400}
          className=" rounded-lg w-[480px] h-[270px]"
        />
      ) : (
        <div className="h-[267px] w-[400px] bg-slate-200 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
};

export default ProductBanner;
