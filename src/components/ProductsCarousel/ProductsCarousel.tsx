"use client";
import { useEffect, useRef, useState } from "react";

import { Product } from "@/types/Product";

import { VerticalCard } from "../Card/VerticalCard";

interface ProductsCarouselProps {
  activeCategory?: string;
  path?: string;
  products?: Product[];
}

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  activeCategory,
  products,
  path,
}) => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });

  const scrollCarousel = (offset: number) => {
    const current = carouselRef.current as HTMLElement;

    if (current) {
      current.scrollBy({ left: offset, behavior: "smooth" });
      setTimeout(() => {
        const { scrollLeft, scrollWidth, clientWidth } = current;
        const maxScrollLeft = scrollWidth - clientWidth;
        setCanScroll({
          left: scrollLeft > 0,
          right: scrollLeft < maxScrollLeft,
        });
      }, 200);
    }
  };

  useEffect(() => {
    const checkScroll = () => {
      if (carouselRef.current) {
        const { scrollWidth, clientWidth } = carouselRef.current;
        const isScrollNeeded = scrollWidth > clientWidth;

        setCanScroll({
          left: false,
          right: isScrollNeeded,
        });

        carouselRef.current.style.justifyContent = isScrollNeeded
          ? "flex-start"
          : "center";
      }
    };

    checkScroll();

    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, [activeCategory]);

  return (
    <section className="pt-5 pb-20 tablet:pb-[62px] overflow-hidden">
      {path !== "shop" && (
        <div className="flex justify-between px-6 tablet:px-10 mb-5">
          <button
            onClick={() => scrollCarousel(-200)}
            disabled={!canScroll.left}
          >
            назад
          </button>
          <button
            onClick={() => scrollCarousel(200)}
            disabled={!canScroll.right}
            className={!canScroll.right ? "text-AccentRed" : "text-green-500"}
          >
            вперед
          </button>
        </div>
      )}

      <ul
        ref={carouselRef}
        className="flex overflow-auto whitespace-nowrap scroll-smooth py-2 px-6 tablet:px-10 gap-5 hide-scrollbar"
      >
        {products &&
          products.map((product) => (
            <li key={product.id} className="inline-block">
              <VerticalCard product={product} />
            </li>
          ))}
      </ul>
    </section>
  );
};
