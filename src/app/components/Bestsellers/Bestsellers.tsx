import Link from "next/link";
import Image from "next/image";

import plug_book from "../../assets/img/plugs/plug_book.jpg";

export const Bestsellers = () => {
  const sale = true;
  return (
    <section className="px-6 pt-10 pb-20 tablet:px-10 tablet:pb-[62px]">
      <ul className="desktop:grid desktop:grid-cols-2 desktop:gap-5">
        <li className="desktop:col-span-1 desktop:row-span-2 mb-5 desktop:mb-0 p-4 tablet:p-8 border-Black border">
          <div className="flex mb-2 justify-between">
            <span className="px-1 py[2px]  border-Black border flex justify-center items-center">
              Bestseller
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex">
            <div className="relative px-4 tablet:px-[70px] desktop:px-[96px] desktop:py-4 w-32 h-36 tablet:w-[293px] tablet:h-[234px] desktop:w-[491px] desktop:h-[472px]">
              <Image
                src={plug_book}
                alt="Unavailable Image"
                layout="fill"
                objectFit="contain" 
                objectPosition="center" 
                quality={100}
              />
            </div>
            <div className="flex flex-col items-center gap-1 flex-1">
              <div className="flex flex-col items-start gap-1 w-full">
                <p className="text-xxxs tablet:text- xxs font-light uppercase">
                  author
                </p>
                <p className="text-xs tablet:text-cartL uppercase font-normal h-12 target:h-[60px]">
                  book name
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-start gap-3 flex-1 tablet:gap-4">
                  {sale ? (
                    <>
                      <p className="text-m tablet:text-l uppercase font-normal text-AccentRed">
                        $20
                      </p>
                      <p className="text-m tablet:text-l uppercase font-normal line-through">
                        $25
                      </p>
                    </>
                  ) : (
                    <p className="text-m tablet:text-l uppercase font-normal">
                      $25
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 8H28"
                      stroke="#1C1C1C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.3332 13.3333C21.3332 14.7478 20.7713 16.1044 19.7711 17.1046C18.7709 18.1048 17.4143 18.6667 15.9998 18.6667C14.5853 18.6667 13.2288 18.1048 12.2286 17.1046C11.2284 16.1044 10.6665 14.7478 10.6665 13.3333"
                      stroke="#1C1C1C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="desktop:col-span-1 mb-5 desktop:mb-0 p-4 tablet:p-8">
          Другий елемент
        </li>
        <li className="desktop:col-span-1 p-4 tablet:p-8">Третій елемент</li>
      </ul>
    </section>
  );
};
