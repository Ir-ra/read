"use client";
import { useEffect, useState, useRef } from "react";
import { VerticalCard } from "../Card/VerticalCard";

interface ProductsCarouselProps {
  activeCategory: string;
}

const productsData = [
  {
    id: "1",
    category: "new",
    cover: "",
    autor: "Rebecca Yarros",
    bookName: "Fourth Wing",
    price: "36",
    new: "new",
    sale: false,
  },
  {
    id: "2",
    category: "Autograph",
    autor: "Rebecca Yarros",
    bookName: "The subtle art of not giving a fuck",
    price: "36",
    new: "coming soon",
    sale: false,
  },
  {
    id: "3",
    category: "18+",
    autor: "Rebecca Yarros",
    bookName: "Fourth Wing",
    price: "36",
    new: "coming soon",
    sale: false,
  },
  {
    id: "4",
    category: "18+",
    autor: "Rebecca Yarros",
    bookName: "Fourth Wing",
    price: "36",
    new: "new",
    sale: false,
  },
  {
    id: "5",
    category: "Autograph",
    autor: "Rebecca Yarros",
    bookName: "The subtle art of not giving a fuck",
    price: "36",
    new: "new",
    sale: false,
  },
  {
    id: "6",
    category: "New",
    autor: "Rebecca Yarros",
    bookName: "Fourth Wing",
    price: "36",
    new: "new",
    sale: false,
  },
  {
    id: "7",
    category: "Autograph",
    autor: "Rebecca Yarros",
    bookName: "The subtle art of not giving a fuck",
    price: "36",
    new: "new",
    sale: false,
  },
  {
    id: "8",
    category: "Autograph",
    autor: "Rebecca Yarros",
    bookName: "The subtle art of not giving a fuck",
    price: "36",
    new: "new",
    sale: false,
  },
  {
    id: "9",
    category: "Autograph",
    autor: "Rebecca Yarros",
    bookName: "The subtle art of not giving a fuck",
    price: "36",
    new: "new",
    sale: false,
  },
];

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  activeCategory,
}) => {
  const filteredProducts = productsData.filter(
    (products) => products.new === activeCategory
  );

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
    <section className="pt-5 pb-20 tablet:pb-[62px]">
      <div className="flex justify-between px-6 tablet:px-10 mb-5">
        <button onClick={() => scrollCarousel(-200)} disabled={!canScroll.left}>
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
      <ul
        ref={carouselRef}
        className="flex overflow-auto whitespace-nowrap scroll-smooth py-2 px-6 tablet:px-10 gap-5 hide-scrollbar"
      >
        {filteredProducts.map((product) => (
          <li key={product.id} className="inline-block">
            <VerticalCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};
