import { useProducts } from "@/app/context/ProductsContext";
import { Product } from "@/types/Product";

import { ProductsCarousel } from "../ProductsCarousel/ProductsCarousel";
import Title from "../Title/Title";

export default function Recommended() {
  const { products } = useProducts();
  const getSuggestedProducts = (prods: Product[]) => {
    const suggested = prods
      .sort(() => Math.random() - Math.random())
      .slice(0, 4);

    return suggested;
  };

  const suggestedProds = getSuggestedProducts(products);

  return (
    <section className="flex flex-col gap-8">
      <Title title="Recommended" />
      <ProductsCarousel products={suggestedProds} path="shop" />
    </section>
  );
}
