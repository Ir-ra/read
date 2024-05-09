"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Product } from "@/types/Product";
import useAddToCart from "@/utils/useAddToCart";

import cart from "../../../public/img/cart.svg";
import cartFull from "../../../public/img/cart_full.svg";
import fav from "../../../public/img/favourite.svg";
import plug_book from "../../../public/img/plugs/plug_book.jpg";

export const VerticalCard = ({
  product,
  onBookClick,
}: {
  product: Product;
  onBookClick?: (product: Product) => void;
}) => {
  const pathname = usePathname();
  const author = product.fields?.find((p) => p.lable_name === "Author")?.value;
  const { id, category_name, image, name, fields, special_price, price } =
    product;

  const { handleAddToCart, isButtonSelected } = useAddToCart({
    id: product.id,
    product: product,
    price: product.price,
  });

  return (
    <div
      className={`p-4 tablet:p-8 border-Black border cursor-pointer hover:shadow-custom focus:shadow-custom ${
        pathname.slice(1) === "shop" ? "w-full" : "w-[240px]"
      } tablet:w-[325px] whitespace-normal justify-stretch`}
    >
      <div className="flex mb-2 justify-between">
        <span className="px-1 py[2px]  border-Black border flex justify-center items-center">
          {category_name ? category_name : "category"}
        </span>
        <button
          type="button"
          className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center"
        >
          <Image src={fav} alt="add to favourite" priority={false} />
        </button>
      </div>
      <div className="flex flex-col">
        <Link
          href={`/shop/${id}`}
          className="flex-auto"
          onClick={onBookClick && (() => onBookClick(product))}
        >
          <div className="mb-2 tablet:mb-5">
            <div
              className={`relative ${
                pathname.slice(1) === "shop"
                  ? "min-w-[70px] tablet:w-full"
                  : "w-[142px]"
              } h-[212px] tablet:w-[149px] tablet:h-[220px] mx-auto`}
            >
              <Image
                src={`${image[0]}` || plug_book}
                alt={name}
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                sizes="50vw"
                quality={100}
                priority={true}
              />
            </div>
          </div>
        </Link>
        <div className="flex flex-col items-center gap-1 flex-1">
          <div className="flex flex-col items-start gap-1 w-full">
            <p className="text-xxxs tablet:text-xxs font-light uppercase h-8">
              {fields ? author : "book author"}
            </p>
            <p className="text-xs tablet:text-cartL uppercase font-normal h-12 target:h-[60px] overflow-hidden">
              {name || "book name"}
            </p>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="flex items-start gap-3 flex-1 tablet:gap-4">
              {special_price ? (
                <>
                  <p className="text-m tablet:text-l uppercase font-normal text-AccentRed">
                    ${special_price}
                  </p>
                  <p className="text-m tablet:text-l uppercase font-normal line-through">
                    ${price}
                  </p>
                </>
              ) : (
                <p className="text-m tablet:text-l uppercase font-normal">
                  ${price}
                </p>
              )}
            </div>
            <button
              className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center"
              onClick={handleAddToCart}
            >
              <Image
                src={isButtonSelected ? cartFull : cart}
                alt="add to cart"
                priority={false}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
