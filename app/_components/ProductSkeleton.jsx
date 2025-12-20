const ProductSkeleton = () => {
  return (
    <div className="border p-1 border-gray-200 rounded-lg animate-pulse">
      <div className="bg-gray-200 h-[190px] rounded-t-lg w-full mb-2"></div>
      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-b-md">
        <div className="space-y-2 w-full">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-10"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
