import { Product } from "@/app/types/Product";
import { VerticalCard } from "../Card/VerticalCard";
import Title from "../Title/Title";
import { ProductsCarousel } from "../ProductsCarousel/ProductsCarousel";

export default function RecentlyViewed({ recentlyViewed }: {recentlyViewed: Product[]}) {
  return (
    <section className="flex flex-col gap-8">
      <Title title='Recently viewed' />
      <ProductsCarousel products={recentlyViewed} path='shop' />
    </section>
  )
}
