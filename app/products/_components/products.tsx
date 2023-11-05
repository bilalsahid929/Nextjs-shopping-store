"use client";
import { Card } from "@/app/components";
import useProducts from "../useProducts";

const Products = () => {
  const { data: products, isError } = useProducts();
  if (isError) return null;
  return products?.map((product) => (
    <Card key={product.id} product={product} />
  ));
};

export default Products;
