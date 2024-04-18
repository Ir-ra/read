"use client";
import { useContext } from "react";

import { CartContext } from "@/app/context/CartContext";

import { HorizontalCard } from "../Card/HorizontalCard";

export const CartItem = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-6 tablet:gap-10">
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
