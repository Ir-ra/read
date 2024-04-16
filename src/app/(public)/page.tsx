"use client";
import { useState } from "react";

import { Bestsellers } from "@/components/Bestsellers/Bestsellers";
import { Hero } from "@/components/Hero/Hero";
import { ProductsCarousel } from "@/components/ProductsCarousel/ProductsCarousel";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { Subscribe } from "@/components/Subscribe/Subscribe";

import { useProducts } from "../context/ProductsContext";

export default function Home() {
  const { products } = useProducts();
  const [activeCategory, setActiveCategory] = useState<"new" | "coming soon">(
    "new"
  );
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
      <Bestsellers />
    </main>
  );
}