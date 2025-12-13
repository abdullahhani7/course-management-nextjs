import { List } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="hover:border p-1 border-teal-400 rounded-lg hover:shadow-md hover:cursor-pointer">
      <Image
        src={product?.banner?.url}
        alt="banner-card"
        width={400}
        height={350}
        className="rounded-t-lg h-[190px] object-cover"
      />
      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-b-md">
        <div className="">
          <h2 className="text-[14px] font-medium line-clamp-1">{product.title}</h2>
          <h2 className="text-[11px] text-gray-400 flex gap-2 items-center">
            <List className="w-4 h-4" />
            {product.category}
          </h2>
        </div>
        <h2>{product.price}</h2>
      </div>
    </div>
  );
};

export default ProductItem;
