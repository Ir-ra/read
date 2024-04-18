"use client";
import Image from "next/image";
import { useContext } from "react";

import { CartContext } from "@/app/context/CartContext";

import cross from "../../../public/img/delete.svg";
import { HorizontalCard } from "../Card/HorizontalCard";

export const CartItem = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-6 tablet:gap-10">
      <div className="flex justify-end">
        {!!cartItems.length && (
          <button
            type="button"
            onClick={clearCart}
            className="flex items-center gap-2"
          >
            <Image src={cross} alt="delete all" className="w-6 h-6" />
            <p className="text-xxs font-light uppercase">
              Delete all ({cartItems.length})
            </p>
          </button>
        )}
      </div>
      {cartItems &&
        cartItems.map((cartItem) => (
          <HorizontalCard
            book={cartItem.product}
            pathname="/cart"
            key={cartItem.id}
            cartItem={cartItem}
          />
        ))}
    </div>
  );
};
