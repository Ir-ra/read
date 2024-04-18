import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/Product";

import cart from "../../../public/img/cart.svg";
import cartFull from "../../../public/img/cart_full.svg";
import fav from "../../../public/img/favourite.svg";
import plug_book from "../../../public/img/plugs/plug_book.jpg";
import { HorizontalCard } from "../Card/HorizontalCard";

export const Bestsellers = ({
  products,
  isButtonSelected,
  handleAddToCart,
}: {
  products: Product[];
  isButtonSelected: boolean;
  handleAddToCart: () => void;
}) => {
  // useEffect(() => {
  //   const handleCategory = async () => {
  //     try {
  //       const category = await getProduct(13);

  //       console.log("category.data", category.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   handleCategory();
  // }, []);
  const author = products[0]?.fields?.find(
    (p) => p.lable_name === "Author"
  )?.value;

  return (
    <section className="px-6 pt-10 pb-20 tablet:px-10 tablet:pb-[62px]">
      <ul className="desktop:flex lg:items-start desktop:gap-5 w-full desktop:items-center">
        {products && (
          <>
            <li className="desktop:flex desktop:w-[555px] desktop:gap-5 items-start flex-shrink-0 mb-5 desktop:mb-0">
              <div className="p-4 tablet:p-8 border-Black border desktop:w-[555px] cursor-pointer hover:shadow-custom focus:shadow-custom">
                <div className="flex mb-2 justify-between">
                  <span className="px-1 py-[2px]  tablet:px-4 tablet:py-2 border-Black border flex justify-center items-center uppercase text-xxxs tablet:text-cart font-normal">
                    {products[0]?.category_name}
                  </span>
                  <button
                    type="button"
                    className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center"
                  >
                    <Image src={fav} alt="add to favourite" priority={false} />
                  </button>
                </div>
                <div className="flex desktop:block">
                  <div className="px-4 tablet:px-[70px] desktop:px-[96px] desktop:py-4 desktop:mb-5">
                    <Link href={`/shop/${products[0]?.id}`}>
                      <div className="relative w-[96px] h-[144px] tablet:w-[160px] tablet:h-[234px] desktop:w-[299px] desktop:h-[440px] ">
                        <Image
                          src={products[0]?.image[0]}
                          alt={products && products[0]?.name}
                          fill
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                          sizes="50vw"
                          quality={100}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1 justify-between">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-xxxs tablet:text- xxs font-light uppercase">
                        {author}
                      </p>
                      <p className="text-xs tablet:text-cartL uppercase font-normal mb-10 desktop:mb-0 desktop:min-h-[42px] h-full">
                        {products[0]?.name}
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-start gap-3 flex-1 tablet:gap-4">
                        {products[0]?.special_price ? (
                          <>
                            <p className="text-m tablet:text-l uppercase font-normal text-AccentRed">
                              ${products[0]?.special_price}
                            </p>
                            <p className="text-m tablet:text-l uppercase font-normal line-through">
                              ${products[0]?.price}
                            </p>
                          </>
                        ) : (
                          <p className="text-m tablet:text-l uppercase font-normal">
                            ${products[0]?.price}
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
            </li>
            <div className="desktop:flex desktop:flex-col desktop:flex-1 desktop:gap-5 desktop:items-stretch">
              <li className="mb-5 desktop:mb-0">
                <HorizontalCard book={products[1]} />
              </li>
              <li>
                <HorizontalCard book={products[2]} />
              </li>
            </div>
          </>
        )}
      </ul>
    </section>
  );
};
