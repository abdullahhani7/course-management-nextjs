import ProductItem from "./ProductItem";
import ProductSkeleton from './ProductSkeleton'

const ProductList = ({ productList, isLoading }) => {
  const skeletonArray = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {isLoading
        ? skeletonArray.map((_, i) => <ProductSkeleton key={i} />)
        : productList.map((product) => <ProductItem key={product.documentId} product={product} />)}
    </div>
  );
};

export default ProductList;
