import type { OrderSummary } from "@/app/store/useCart";

const OrderSummary = ({ orderSummary }: { orderSummary?: OrderSummary }) => {
  const {
    subTotal = 0,
    discount = 0,
    deliveryFee = 0,
    grandTotal = 0,
  } = orderSummary ?? {};
  return (
    <div className="bg-white rounded-md p-4 ">
      <h2 className="text-xl font-semibold mb-4 border-b-2">Order Summary</h2>

      {/* Sub Total */}
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Sub Total:</span>
        <span className="text-black">${subTotal.toFixed(2)}</span>
      </div>

      {/* Discount */}
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Discount:</span>
        <span className="text-black">${discount.toFixed(2)}</span>
      </div>

      {/* Delivery Fee */}
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Delivery Fee:</span>
        <span className="text-black">${deliveryFee.toFixed(2)}</span>
      </div>

      {/* Grand Total */}
      <div className="flex justify-between mb-4">
        <span className="text-xl font-semibold">Grand Total:</span>
        <span className="text-xl font-semibold">${grandTotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
