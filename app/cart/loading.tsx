import React from "react";
import CartTableSkeleton from "./_components/cartTabkeSkeleton";
import OrderSummarySkeleton from "./_components/orderSummarySkeleton";

const Loading = () => {
  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">My Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className=" col-span-2">
          <CartTableSkeleton />
        </div>

        <div className="">
          <OrderSummarySkeleton />
        </div>
      </div>
    </div>
  );
};

export default Loading;
