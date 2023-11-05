import React from "react";
import { Product } from "../products/useProducts";
import Image from "next/image";
import { PiHeartBold } from "react-icons/pi";
import { useRouter } from "next/navigation";

const Card = ({
  product,
}: // onClick,
{
  product: Product;
  // onClick: (id: number) => void;
}) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = product;
  const router = useRouter();

  {
    console.log("product.id", product.id);
  }
  return (
    <div
      className="bg-base-100  cursor-pointer p-4 hover:opacity-75"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      <figure className="relative h-60 w-full shadow-md rounded-lg">
        <Image
          src={product.images[0]}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </figure>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h2 className="text-info  truncate text-base">{title}</h2>
        </div>
        <div className="text-info">
          <PiHeartBold size={20} />
        </div>
      </div>
      <p className="  text-secondary text-base line-clamp-1 my-2">
        {description}
      </p>
      <p className=" text-info mt-2 ">${price}</p>
    </div>
  );
};

export default Card;
