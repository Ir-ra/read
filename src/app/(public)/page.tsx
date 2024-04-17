"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Bestsellers } from "@/components/Bestsellers/Bestsellers";
import { Hero } from "@/components/Hero/Hero";
import { ProductsCarousel } from "@/components/ProductsCarousel/ProductsCarousel";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { Subscribe } from "@/components/Subscribe/Subscribe";
import { fetchProducts } from "@/redux/products/operations";
import { selectProducts } from "@/redux/products/slice";
import { AppDispatch } from "@/redux/store";

import { useProducts } from "../context/ProductsContext";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"new" | "coming soon">(
    "new"
  );
  const { products, loading } = useProducts();
  // const dispatch = useDispatch() as AppDispatch;
  // const { products, loading } = useSelector(selectProducts);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

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
