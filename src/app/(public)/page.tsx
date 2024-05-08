"use client";
import { useEffect, useState } from "react";

import { Bestsellers } from "@/components/Bestsellers/Bestsellers";
import { Hero } from "@/components/Hero/Hero";
import { ProductsCarousel } from "@/components/ProductsCarousel/ProductsCarousel";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { getBestSells } from "@/services/getAPI";
import { Product } from "@/types/Product";
import useAddToCart from "@/utils/useAddToCart";

import { useProducts } from "../context/ProductsContext";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"new" | "coming soon">(
    "new"
  );
  const [bestsellers, setBestsellers] = useState<Product[]>([]);
  const { products } = useProducts();
  console.log("products", products);

  useEffect(() => {
    const fetchBestSells = async () => {
      try {
        if (bestsellers.length === 0) {
          const res = await getBestSells();
          setBestsellers(res.data);
        }
      } catch (error) {
        console.error("Error fetching bestsellers:", error);
      }
    };

    fetchBestSells();
  }, [bestsellers.length]);

  const { handleAddToCart, isButtonSelected } = useAddToCart({
    id: bestsellers.length > 0 ? bestsellers[0].id : "",
    product: bestsellers[0],
    price: bestsellers[0]?.price,
  });
  return (
    <main className="bg-Background">
      <Hero />
      <SectionTitle
        title1="New"
        link1="#"
        title2="Coming soon"
        link2="#"
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ProductsCarousel activeCategory={activeCategory} products={products} />

      <SectionTitle title1="bestsellers" link1="#" />
      <Bestsellers
        products={bestsellers}
        isButtonSelected={isButtonSelected}
        handleAddToCart={handleAddToCart}
      />
    </main>
  );
}
