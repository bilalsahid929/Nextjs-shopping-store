import { useQuery } from "@tanstack/react-query";

import { Product } from "../useProducts";

const useProductDetail = (productId: number) => {
  const fetchProductDetail = async () => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data: Product = await response.json();
    return data;
  };

  return useQuery<Product, Error>({
    queryKey: ["product-detail", productId],
    queryFn: fetchProductDetail,
    staleTime: 60 * 1000, // 60 seconds
    retry: 3,
  });
};

export default useProductDetail;
