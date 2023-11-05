"use client";

import Link from "next/link";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { useCartStore } from "@/app/store/useCart";
import useStore from "../store/useStore";
export default function CartButton() {
  const count = useStore(useCartStore, (state) => state.count());
  return (
    <Link
      href="/cart"
      className="p-2 rounded-md hover:bg-slate-900 text-slate-700 hover:text-slate-300 relative transition duration-200 ease-in-out"
    >
      <PiHandbagSimpleBold size={20} />
      <Label item={count || 0} />
    </Link>
  );
}

const Label: React.FC<{ item: number }> = ({ item }) => {
  if (item === 0) return <></>;

  return (
    <span className="absolute top-0 right-0 w-4 h-4 bg-red-400 text-white font-semibold text-xs rounded-full grid place-content-center">
      {item}
    </span>
  );
};
