import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "../../_utils/CartApis";
import { CartContext } from "../../_context/CartContext";

const ProductInfo = ({ productDetails }) => {
  const { cart, setCart } = useContext(CartContext);
  // console.log(cart);
  

  const { user } = useUser();
  // console.log("user", user);

  const router = useRouter();
  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [productDetails?.documentId],
        },
      };
      CartApis.addToCart(data)
        .then((res) => {
          // console.log("cart created successfully", res.data.data);
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
               product: productDetails,
            },
          ]);
          console.log("cartttt", res?.data?.data?.documentId);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  const description =
    productDetails.description?.[0]?.children?.[0]?.text ?? "";
  return (
    <div className="mt-2  "> 
      {productDetails.id ? (
        <div>
          <h2 className="text-[20px]">{productDetails.title}</h2>
          <h2 className="text-[15px] text-gray-400">
            {productDetails?.category}
          </h2>
          <p className="text-[13px] mt-5">{description}</p>
          <h2 className="text-[11px] text-gray-500 flex items-center gap-2 mt-2 ">
            {productDetails?.instanttDelivery ? (
              <BadgeCheck className="text-green-500 h-5 w-5" />
            ) : (
              <AlertOctagon />
            )}
            Eligible For Instant Delivery
          </h2>
          <h2 className="text-primary text-[32px] mt-3">
            $ {productDetails?.price}
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
