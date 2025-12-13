"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApis from "../_utils/ProductApis";

const ProductSection = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProduct_();
  }, []);
  const getLatestProduct_ = () => {
    ProductApis.getLatestProduct().then((res) => {
      // console.log(res.data.data);
      setProductList(res.data.data);
    });
  };
  return (
    <div>
      <ProductList productList={productList} />
    </div>
  );
};

export default ProductSection;
