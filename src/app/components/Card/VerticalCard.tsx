import Image from "next/image";

import plug_book from "../../assets/img/plugs/plug_book.jpg";
import fav from "../../assets/favourite.svg";
import cart from "../../assets/cart.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Product } from "@/app/types/Product";

export const VerticalCard = ({ product }: { product: Product }) => {
  const pathname = usePathname();
  const author = product.fields?.find(p => p.lable_name === "Author")?.value;
  const { id, category_name, image, name, fields, special_price, price } = product;

  return (
    <Link href={`/shop/${id}`} className="flex-auto">
      <div className={`p-4 tablet:p-8 border-Black border cursor-pointer hover:shadow-custom focus:shadow-custom ${pathname.slice(1) === 'shop' ? 'w-full' : 'w-[240px]'} tablet:w-[325px] whitespace-normal justify-stretch`}>
        <div className="flex mb-2 justify-between">
          <span className="px-1 py[2px]  border-Black border flex justify-center items-center">
            {category_name ? category_name : 'category'}
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
                src={`${image[0]}` || plug_book}
                alt={name}
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                sizes="50vw"
                quality={100}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 flex-1">
            <div className="flex flex-col items-start gap-1 w-full">
              <p className="text-xxxs tablet:text- xxs font-light uppercase">
                {fields ? author : 'book author'}
              </p>
              <p className="text-xs tablet:text-cartL uppercase font-normal h-12 target:h-[60px]">
                {name || 'book name'}
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
              <button className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center">
                <Image src={cart} alt="add to cart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};