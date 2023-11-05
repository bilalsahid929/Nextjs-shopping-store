"use client";
import CartTable from "./_components/cartTable";
import useStore from "../store/useStore";
import { useCartStore } from "@/app/store/useCart";
import OrderSummary from "./_components/orderSummary";

const CartPage = () => {
  const cart = useStore(useCartStore, (state) => state.cart);
  const orderSummary = useStore(useCartStore, (state) =>
    state.getOrderSummary()
  );
  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">My Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className=" col-span-2">
          <CartTable cart={cart!} />
        </div>

        <div className="">
          <OrderSummary orderSummary={orderSummary} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
