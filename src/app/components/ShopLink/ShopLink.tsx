import Link from "next/link";

export const ShopLink = () => {
  return (
    <Link
      href="#"
      className={
        "cursor-pointer py-4 px-8 bg-Black text-xsx font-normal uppercase text-Background flex justify-center tablet:w-[216px] desktop:w-[325px] max-w-[327px] tablet:text-sm desktop:mb-20    box-border border border-Black transition duration-300 ease-in-out hover:bg-White hover:text-Black active:bg-White active:text-Black"
      }
    >
      Shop now
    </Link>
  );
};
