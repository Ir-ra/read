import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

import { CartContext } from "@/app/context/CartContext";
import { useLocalStorage } from "@/utils/useLocalStorage";

import Profile from "../../../public/img/profile_icon.svg";
import Cart from "../../../public/img/shopping-bag.svg";
import { SearchAppBar } from "./Search/SearchBar";

type Props = {
  closeMenu: () => void;
};

export const LeftSideNav: React.FC<Props> = ({ closeMenu }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="flex justify-end uppercase text-s ">
      <SearchAppBar />

      <Link
        href="/cart"
        className="flex items-center relative border-l border-Black px-4 tablet:px-8 h-12 mr-auto"
        onClick={closeMenu}
      >
        <div className="hidden desktop:flex">Cart</div>

        <Image
          src={Cart}
          alt="shopping bag"
          className="desktop:hidden max-w-10"
          width={40}
        />

        <span className="absolute bottom-6 right-1 tablet:right-4 desktop:bottom-4 text-xxs font-light">
          {cartItems.length}
        </span>
      </Link>

      <Link
        href="/login"
        className="hidden tablet:flex items-center border-l border-Black pl-4 tablet:pl-8 h-12 mr-auto"
        onClick={closeMenu}
      >
        <div className="hidden desktop:flex">log in</div>

        <Image
          src={Profile}
          alt="profile"
          className="desktop:hidden"
          width={40}
        />
      </Link>
    </nav>
  );
};
