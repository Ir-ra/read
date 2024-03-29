import Image from "next/image";

import plug_book from "../../assets/img/plugs/plug_book.jpg";
import fav from "../../assets/favourite.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Product } from "@/app/types/Product";

export const VerticalCard = ({ product }: { product: Product }) => {
  const pathname = usePathname();
  const author = product.fields && product.fields.find(p => p.lable_name === "Author")?.value;

  return (
    <Link href={`/shop/${product.id}`} className="flex-auto">
      <div className={`p-4 tablet:p-8 border-Black border cursor-pointer hover:shadow-custom focus:shadow-custom ${pathname.slice(1) === 'shop' ? 'w-full' : 'w-[240px]'} tablet:w-[325px] whitespace-normal justify-stretch`}>
        <div className="flex mb-2 justify-between">
          <span className="px-1 py[2px]  border-Black border flex justify-center items-center">
            {product.category_name ? product.category_name : 'category'}
          </span>
          <button
            type="button"
            className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center"
          >
            <Image src={fav} alt="add to favourite" />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-2 tablet:mb-5">
            <div className={`relative ${pathname.slice(1) === 'shop' ? 'min-w-[130px] tablet:w-full' : 'w-[142px]'} h-[212px] tablet:w-[149px] tablet:h-[220px] mx-auto`}>
              <Image
                src={product.image ? `${product.image[0]}` : plug_book}
                alt={product.name}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="50vw"
                quality={100}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 flex-1">
            <div className="flex flex-col items-start gap-1 w-full">
              <p className="text-xxxs tablet:text- xxs font-light uppercase">
                {product.fields ? author : 'book author'}
              </p>
              <p className="text-xs tablet:text-cartL uppercase font-normal h-12 target:h-[60px]">
                {product.name ? product.name : 'book name'}
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-start gap-3 flex-1 tablet:gap-4">
                {product.special_price > 0 ? (
                  <>
                    <p className="text-m tablet:text-l uppercase font-normal text-AccentRed">
                      ${product.special_price}
                    </p>
                    <p className="text-m tablet:text-l uppercase font-normal line-through">
                      ${product.price}
                    </p>
                  </>
                ) : (
                  <p className="text-m tablet:text-l uppercase font-normal">
                    ${product.price}
                  </p>
                )}
              </div>
              <button className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M8 2.66666L4 8V26.6667C4 27.3739 4.28095 28.0522 4.78105 28.5523C5.28115 29.0524 5.95942 29.3333 6.66667 29.3333H25.3333C26.0406 29.3333 26.7189 29.0524 27.219 28.5523C27.719 28.0522 28 27.3739 28 26.6667V8L24 2.66666H8Z"
                    stroke="#1C1C1C"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 8H28"
                    stroke="#1C1C1C"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.3332 13.3333C21.3332 14.7478 20.7713 16.1044 19.7711 17.1046C18.7709 18.1048 17.4143 18.6667 15.9998 18.6667C14.5853 18.6667 13.2288 18.1048 12.2286 17.1046C11.2284 16.1044 10.6665 14.7478 10.6665 13.3333"
                    stroke="#1C1C1C"

                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};