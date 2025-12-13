"use client";

import BreadCrumb from "@/app/_components/BreadCrumb";
import ProductApis from "@/app/_utils/ProductApis";
import React, { useEffect, useState } from "react";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";

const ProductDetails = ({ params }) => {
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    getProductById_();
  }, [params?.documentId]);
  const getProductById_ = () => {
    ProductApis.getProductById(params?.documentId).then((res) => {
      console.log("product item: ", res.data);
      setProductDetails(res.data.data);
    });
  };

  return (
    <div className="px-10 md:px-28 py-8">
      <BreadCrumb />
      <div className="mt-10 flex flex-col md:flex-row justify-around">
        <ProductBanner productDetails={productDetails} />
        <ProductInfo />
      </div>
    </div>
  );
};

export default ProductDetails;
