"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { CartContext } from "@/app/context/CartContext";
import { CartItem } from "@/types/CartItem";
import { Product } from "@/types/Product";
import useAddToCart from "@/utils/useAddToCart";

import cart from "../../../public/img/cart.svg";
import cartFull from "../../../public/img/cart_full.svg";
import del from "../../../public/img/delete.svg";
import plug_book from "../../../public/img/plugs/plug_book.jpg";

type HorizontalCardType = {
  book: Product;
  pathname?: string;
  cartItem?: CartItem;
};

export const HorizontalCard = ({
  book,
  pathname,
  cartItem,
}: HorizontalCardType) => {
  const { removeFromCart, plusItem, minusItem } = useContext(CartContext);

  const { handleAddToCart, isButtonSelected } = useAddToCart({
    id: book?.id,
    product: book,
    price: book?.price,
  });

  const author = book?.fields.find((p) => p.lable_name === "Author")?.value;

  return (
    <div className="p-4 tablet:p-8 border-Black border cursor-pointer hover:shadow-custom focus:shadow-custom">
      <div className="flex mb-2 justify-between">
        <span className="px-1 py-[2px]  tablet:px-4 tablet:py-2 border-Black border flex justify-center items-center uppercase text-xxxs tablet:text-cart font-normal">
          {book ? book?.category_name : "category"}
        </span>
        <button
          type="button"
          className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
          >
            <path
              d="M18.75 23.25L10 17L1.25 23.25V3.25C1.25 2.58696 1.51339 1.95107 1.98223 1.48223C2.45107 1.01339 3.08696 0.75 3.75 0.75H16.25C16.913 0.75 17.5489 1.01339 18.0178 1.48223C18.4866 1.95107 18.75 2.58696 18.75 3.25V23.25Z"
              stroke="#1C1C1C"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex mb-3 tablet:mb-0">
        <div className="px-4 tablet:px-[70px] desktop:px-[96px]">
          <Link href={`/shop/${book?.id}`}>
            <div className="relative w-[96px] h-[144px] tablet:w-[160px] tablet:h-[234px] desktop:w-[156px]">
              <Image
                src={book ? book?.image[0] : plug_book}
                alt={`${author} - ${book?.name}`}
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                sizes="50vw"
                quality={100}
                priority={true}
              />
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-1 flex-1 justify-between">
          <div className="flex gap-2 justify-between">
            <div className="flex flex-col items-start gap-1 w-full">
              <p className="text-xxxs tablet:text- xxs font-light uppercase">
                {author ? author : "author name"}
              </p>
              <p className="text-xs tablet:text-cartL uppercase font-normal mb-10 ">
                {book ? book?.name : "book name"}
              </p>
            </div>

            {pathname === "/cart" && cartItem && (
              <button
                className="w-10 h-10"
                onClick={() => removeFromCart(cartItem)}
              >
                <Image src={del} alt="cross delete" />
              </button>
            )}
          </div>
          <div className="flex justify-between items-center w-full">
            {pathname === "/cart" ? (
              <>
                <div className="hidden tablet:flex">
                  <div className="flex mr-auto">
                    <button
                      className="w-8 h-8 border border-Grey rounded-full"
                      onClick={() => cartItem && minusItem(cartItem)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="31"
                          height="31"
                          rx="15.5"
                          stroke="#BFBFBF"
                        />
                        <path
                          d="M6.66797 16H25.3346"
                          stroke="#1C1C1C"
                          stroke-width="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>

                    <p className="text-cartL font-normal uppercase w-[34px] text-center">
                      {cartItem?.quantity}
                    </p>

                    <button
                      className="w-8 h-8 border border-Grey rounded-full"
                      onClick={() => cartItem && plusItem(cartItem)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="31"
                          height="31"
                          rx="15.5"
                          stroke="#BFBFBF"
                        />
                        <path
                          d="M16 6.6665V25.3332"
                          stroke="#1C1C1C"
                          stroke-width="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.66797 16H25.3346"
                          stroke="#1C1C1C"
                          stroke-width="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="hidden tablet:flex text-m font-normal uppercase gap-4">
                  {book && book.special_price ? (
                    <>
                      <p className="text-m tablet:text-l uppercase font-normal text-AccentRed">
                        ${book.special_price}
                      </p>
                      <p className="text-m tablet:text-l uppercase font-normal line-through">
                        ${book.price}
                      </p>
                    </>
                  ) : (
                    <p className="text-m tablet:text-l uppercase font-normal">
                      ${book?.price}
                    </p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start gap-3 flex-1 tablet:gap-4">
                  {book && book.special_price ? (
                    <>
                      <p className="text-m tablet:text-l uppercase font-normal text-AccentRed">
                        ${book.special_price}
                      </p>
                      <p className="text-m tablet:text-l uppercase font-normal line-through">
                        ${book.price}
                      </p>
                    </>
                  ) : (
                    <p className="text-m tablet:text-l uppercase font-normal">
                      ${book?.price}
                    </p>
                  )}
                </div>
                <button
                  className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center"
                  onClick={handleAddToCart}
                >
                  <Image
                    src={isButtonSelected ? cartFull : cart}
                    alt="cart icon"
                    priority={false}
                  />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {pathname === "/cart" && (
        <div className="flex justify-between tablet:hidden">
          <div className="flex">
            <div className="flex mr-auto">
              <button
                className="w-8 h-8 border border-Grey rounded-full"
                onClick={() => cartItem && minusItem(cartItem)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="15.5"
                    stroke="#BFBFBF"
                  />
                  <path
                    d="M6.66797 16H25.3346"
                    stroke="#1C1C1C"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <p className="text-cartL font-normal uppercase w-[34px] text-center">
                {cartItem?.quantity}
              </p>

              <button
                className="w-8 h-8 border border-Grey rounded-full"
                onClick={() => cartItem && plusItem(cartItem)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="15.5"
                    stroke="#BFBFBF"
                  />
                  <path
                    d="M16 6.6665V25.3332"
                    stroke="#1C1C1C"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66797 16H25.3346"
                    stroke="#1C1C1C"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-4 text-m font-normal uppercase">
            {book && book.special_price ? (
              <>
                <p className="text-m tablet:text-l uppercase font-normal text-AccentRed">
                  ${book.special_price}
                </p>
                <p className="text-m tablet:text-l uppercase font-normal line-through">
                  ${book.price}
                </p>
              </>
            ) : (
              <p className="text-m tablet:text-l uppercase font-normal">
                ${book?.price}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
