import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "../products/useProducts";

export interface CartItem extends Product {
  count: number;
}
export type OrderSummary = {
  subTotal: number;
  discount: number;
  deliveryFee: number;
  grandTotal: number;
};
type CartState = {
  cart: CartItem[];
  count: () => number;
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getOrderSummary: () => OrderSummary;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      count: () => {
        const { cart } = get();
        return cart.length;
      },
      addToCart: (cartItem: CartItem) => {
        const { cart } = get();
        const updatedCart = updateCart(cartItem, cart);
        set({ cart: updatedCart });
      },
      removeFromCart: (idProduct: number) => {
        const { cart } = get();
        const updatedCart = removeCart(idProduct, cart);
        set({ cart: updatedCart });
      },
      getOrderSummary: () => {
        const { cart } = get();
        return getOrderSummary(cart);
      },
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
    }
  )
);

function updateCart(cartItem: CartItem, cart: CartItem[]): CartItem[] {
  const productOnCart = cart.map((item) => item.id).includes(cartItem.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === cartItem.id) return cartItem;
      return item;
    });
  }
  return cart;
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === idProduct) return { ...item, count: item.count - 1 };
      return item;
    })
    .filter((item) => {
      return item.count;
    });
}

const getOrderSummary = (cart: CartItem[]) => {
  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  const discount = cart.reduce(
    (total, item) =>
      total + item.price * (item.discountPercentage / 100) * item.count,
    0
  );
  const deliveryFee = 0; // You can calculate the delivery fee if needed
  const grandTotal = subTotal - discount + deliveryFee;

  return {
    subTotal,
    discount,
    deliveryFee,
    grandTotal,
  };
};

export default useCartStore;
