"use client";
import { Product } from "../products/useProducts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = Product & { quantity?: number };

export type OrderSummary = {
  subTotal: number;
  discount: number;
  deliveryFee: number;
  grandTotal: number;
};

interface State {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (Item: CartItem) => void;
  removeFromCart: (Item: CartItem) => void;
  getOrderSummary: () => OrderSummary;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart: (product: CartItem) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === product.id);

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity as number) + 1 }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        } else {
          const updatedCart = [...cart, { ...product, quantity: 1 }];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },
      removeFromCart: (product: CartItem) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
          totalItems: state.totalItems - product.quantity!,
          totalPrice: state.totalPrice - product.quantity! * product.price,
        }));
      },
      getOrderSummary: () => {
        const { cart } = get();
        const subTotal = cart?.reduce(
          (total, item) => total + item?.price * item?.quantity!,
          0
        );
        const discount = cart?.reduce(
          (total, item) =>
            total +
            item?.price * (item?.discountPercentage / 100) * item.quantity!,
          0
        );
        const deliveryFee = 0;
        const grandTotal = subTotal - discount + deliveryFee;

        return {
          subTotal,
          discount,
          deliveryFee,
          grandTotal,
        };
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
