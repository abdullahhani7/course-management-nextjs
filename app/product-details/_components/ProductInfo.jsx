import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import React from "react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const ProductInfo = ({ productDetails }) => {
  const { user } = useUser();
  const router = useRouter();
  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      // logic
    }
  };
  const description =
    productDetails.description?.[0]?.children?.[0]?.text ?? "";
  return (
    <div>
      {productDetails.id ? (
        <div>
          <h2 className="text-[20px]">{productDetails.title}</h2>
          <h2 className="text-[15px] text-gray-400">
            {productDetails.category}
          </h2>
          <p className="text-[13px] mt-5">{description}</p>
          <h2 className="text-[11px] text-gray-500 flex items-center gap-2 mt-2 ">
            {productDetails.instanttDelivery ? (
              <BadgeCheck className="text-green-500 h-5 w-5" />
            ) : (
              <AlertOctagon />
            )}
            Eligible For Instant Delivery
          </h2>
          <h2 className="text-primary text-[32px] mt-3">
            $ {productDetails.price}
          </h2>
          <button
            onClick={() => handleAddToCart()}
            className="flex gap-2 bg-primary text-white rounded-lg p-3 hover:bg-teal-600"
          >
            <ShoppingCart />
            Add To Cart
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
};

export default ProductInfo;
