import React from "react";
import { Skeleton } from "@/app/components";

const Loading = () => {
  return (
    <div className="container mx-auto p-4 product-section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:order-1">
          <Skeleton height="20rem" />
        </div>

        <div className="md:order-2">
          <Skeleton height="20rem" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
