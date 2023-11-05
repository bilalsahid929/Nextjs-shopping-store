import { CardSkeleton } from "../components";

const ProductsSkeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <CardSkeleton key={item} />
      ))}
    </div>
  );
};

export default ProductsSkeleton;
