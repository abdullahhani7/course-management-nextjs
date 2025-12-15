"use client"; 
import React, { useEffect, useState } from "react";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";
import { usePathname } from "next/navigation";
import ProductApis from "../../_utils/ProductApis";
import BreadCrumb from "../../_components/BreadCrumb";
import ProductList from "../../_components/ProductList";

const ProductDetails = ({ params }) => {
  const pathname = usePathname();
  // console.log(pathname);

  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductById_();
  }, [params?.documentId]);
  const getProductById_ = () => {
    ProductApis.getProductById(params?.documentId).then((res) => {
      // console.log("product item: ", res.data.data);
      setProductDetails(res.data.data);
      getProductsByCategory(res.data.data);
    });
  };

  const getProductsByCategory = (product) => {
    ProductApis.getProductsByCategory(product.category).then((res) => {
      // console.log(res?.data?.data);
      setProductList(res?.data?.data);
    });
  };

  return (
    <div className="px-10 md:px-28 py-8">
      <BreadCrumb pathname={pathname} productTitle={productDetails.title} />
      <div className="grid gap-5 md:gap-0 grid-cols-1 md:grid-cols-2 mt-10 justify-around">
        <ProductBanner productDetails={productDetails} />
        <ProductInfo productDetails={productDetails} />
      </div>
      <div>
        <h2 className="mt-24 mb-4 text-xl">Simillar Products</h2>
        <ProductList productList={productList} />
      </div>
    </div>
  );
};

export default ProductDetails;
