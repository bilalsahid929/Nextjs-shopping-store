"use client";
import React from "react";
import useProducts from "../useProducts";
import { Card } from "@/app/components";

const Products = () => {
  const { data: products, isError } = useProducts();
  if (isError) return null;
  return products?.map((product) => (
    <Card key={product.id} product={product} />
  ));
};

export default Products;
