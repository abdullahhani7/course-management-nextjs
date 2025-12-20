"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApis from "../_utils/ProductApis";

const ProductSection = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLatestProduct_();
  }, []);

  const getLatestProduct_ = () => {
    ProductApis.getLatestProduct().then((res) => {
      setProductList(res.data.data);
      setIsLoading(false);
    });
  };

  return (
    <div className="px-10 md:px-20">
      <h2 className="my-4 text-2xl">Brand New</h2>
      <p className="text-sm text-gray-500 mb-2">
        ⚠️ Data may take a few seconds to load due to Strapi Cloud cold start
      </p>
      <ProductList productList={productList} isLoading={isLoading} />
    </div>
  );
};


export default ProductSection;
