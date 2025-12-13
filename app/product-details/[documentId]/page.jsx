"use client";

import ProductApis from "@/app/_utils/ProductApis";
import React, { useEffect } from "react";

const ProductDetails = ({ params }) => {
  useEffect(() => {
    getProductById_();
  }, [params?.documentId]);
  const getProductById_ = () => {
    ProductApis.getProductById(params?.documentId).then((res) => {
      console.log("product item: ", res.data);
    });
  };

  return <div>ProductDetails {params?.documentId}</div>;
};

export default ProductDetails;
