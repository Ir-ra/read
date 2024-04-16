import { Product } from "@/types/Product";

import { VerticalCard } from "../Card/VerticalCard";
import { ProductsCarousel } from "../ProductsCarousel/ProductsCarousel";
import Title from "../Title/Title";

export default function RecentlyViewed({
  recentlyViewed,
}: {
  recentlyViewed: Product[];
}) {
  return (
    <section className="flex flex-col gap-8">
      <Title title="Recently viewed" />
      <ProductsCarousel products={recentlyViewed} path="shop" />
    </section>
  );
}
