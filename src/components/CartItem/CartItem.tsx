"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import { CartContext } from "@/app/context/CartContext";

import cross from "../../../public/img/delete.svg";
import emptyCart from "../../../public/img/empty-cart.svg";
import { Button } from "../Button/Button";
import { HorizontalCard } from "../Card/HorizontalCard";

export const CartItem = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const router = useRouter();

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

      {!cartItems.length && (
        <div className="flex">
          <div className="flex flex-col m-auto justify-center">
            <Image
              src={emptyCart}
              alt="empry cart"
              className="flex w-28 h-28 justify-center items-center m-auto mb-4"
            />
            <p className="flex justify-center items-center m-auto mb-10">
              Your cart is empty
            </p>

            <Button title="Go to shop" onClick={() => router.push("/shop")} />
          </div>
        </div>
      )}
    </div>
  );
};
