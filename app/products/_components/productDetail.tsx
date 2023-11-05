"use client";
import { QuantitySelector, Rating } from "@/app/components";
import { useState } from "react";
import { Product } from "../useProducts";

import { useCartStore } from "@/app/store/useCartStore";
const ProductDetail = ({ product }: { product: Product }) => {
  const { addToCart } = useCartStore((state) => state);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const quantitySelectorProps = {
    quantity,
    incrementQuantity,
    decrementQuantity,
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{product!.title}</h1>
      <p className="text-gray-600 mb-4">{product?.description}</p>
      <Rating value={product.rating} text="(250) Ratings" />
      <h4 className="text-2xl font-bold mb-2">{formatProductPrice(product)}</h4>
      <div className="mb-4">
        <QuantitySelector {...quantitySelectorProps} />
      </div>
      <button
        className="btn bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        onClick={() => addToCart(product)}
        // onClick={() => {
        //   addToCart &&
        //     addToCart({ ...restProduct, count: quantity } as CartItem);
        // }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;

function formatProductPrice(product: Product) {
  const currentPrice = `$${product.price.toFixed(2)}`;

  if (product.discountPercentage) {
    const originalPrice = `$${(
      product.price /
      (1 - product.discountPercentage / 100)
    ).toFixed(2)}`;
    const discount = `${product.discountPercentage.toFixed(0)}%OFF`;
    return (
      <h4 className="text-2xl font-bold mb-2 flex items-center">
        <span className="flex items-center">{currentPrice}</span>
        <span className="text-neutral line-through px-5 font-semibold flex items-center">
          {originalPrice}
        </span>
        <span className="text-red-500 font-medium text-base  flex items-center">
          {discount}
        </span>
      </h4>
    );
  } else {
    return <h4 className="text-2xl font-bold mb-2">{currentPrice}</h4>;
  }
}
