"use client";
import { useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Bestsellers } from "@/components/Bestsellers/Bestsellers";
import { Hero } from "@/components/Hero/Hero";
import { ProductsCarousel } from "@/components/ProductsCarousel/ProductsCarousel";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { Product } from "@/types/Product";
import useAddToCart from "@/utils/useAddToCart";

import { useProducts } from "../context/ProductsContext";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"new" | "coming soon">(
    "new"
  );
  const { products } = useProducts();

  const getSuggestedProducts = useMemo(() => {
    return (prods: Product[]) => {
      const suggested = prods
        .sort((a, b) => a.quantity - b.quantity)
        .slice(0, 3);
      return suggested;
    };
  }, []);
  const suggestedProds = getSuggestedProducts(products);
  console.log("suggestedProds", suggestedProds);

  // const dispatch = useDispatch() as AppDispatch;
  // const { products, loading } = useSelector(selectProducts);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);
  const verticalBestsellerId = suggestedProds[0]?.id;

  const { handleAddToCart, isButtonSelected } = useAddToCart({
    id: verticalBestsellerId,
    product: suggestedProds[0],
    price: suggestedProds[0]?.price,
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
        products={suggestedProds}
        isButtonSelected={isButtonSelected}
        handleAddToCart={handleAddToCart}
      />
    </main>
  );
}
