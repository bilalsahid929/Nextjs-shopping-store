import { Skeleton } from "@/app/components";

const OrderSummarySkeleton = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="space-y-2">
        {/* Sub Total */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Sub Total:</span>
          <Skeleton height="1rem" width="50%" />
        </div>

        {/* Discount */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Discount:</span>
          <Skeleton height="1rem" width="50%" />
        </div>

        {/* Delivery Fee */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Delivery Fee:</span>
          <Skeleton height="1rem" width="50%" />
        </div>

        {/* Grand Total */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">Grand Total:</span>
          <Skeleton height="1rem" width="50%" />
        </div>
      </div>
    </div>
  );
};

export default OrderSummarySkeleton;
