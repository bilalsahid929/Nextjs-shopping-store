import { Skeleton } from "@/app/components";

const CartTableSkeleton = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Cart</h2>

      <div className="space-y-4">
        {/* Skeleton for Cart Items */}
        {[1, 2, 3].map((index) => (
          <div key={index}>
            <div className="w-full flex items-center justify-between space-x-4">
              <Skeleton className="w-16 h-16 bg-gray-300 rounded-lg"></Skeleton>
              <Skeleton className="w-2/5 h-6 bg-gray-300 rounded-lg"></Skeleton>
              <Skeleton className="w-1/5 h-6 bg-gray-300 rounded-lg"></Skeleton>
              <Skeleton className="w-1/5 h-6 bg-gray-300 rounded-lg"></Skeleton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartTableSkeleton;
