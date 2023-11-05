import Products from "./_components/products";

const ProductsPage = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6  gap-4">
      <Products />
    </div>
  );
};

export default ProductsPage;
