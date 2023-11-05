import { useQuery } from "@tanstack/react-query";
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductList {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const useProducts = () => {
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data: ProductList = await response.json();
    return data.products;
  };

  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 60 * 1000, // 60 seconds
    retry: 3,
  });
};

export default useProducts;
