"use client";
import { useCartStore } from "@/app/store/useCartStore";
import useFromStore from "@/app/store/useFromStore";
import CartTable from "./_components/cartTable";
import OrderSummary from "./_components/orderSummary";

const CartPage = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const getOrderSummary = useCartStore((state) => state.getOrderSummary);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">My Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className=" col-span-2">
          <CartTable cart={cart!} removeFromCart={removeFromCart} />
        </div>

        <div className="">
          <OrderSummary orderSummary={getOrderSummary()} />
        </div>
      </div>
    </div>
  );
};
export const dynamic = "force-dynamic";
export default CartPage;
