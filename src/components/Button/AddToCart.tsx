"use client";
import React from "react";

import { Product } from "@/types/Product";
import useAddToCart from "@/utils/useAddToCart";

import { Button } from "./Button";

type Props = {
  id: string;
  product: Product;
};

export default function AddToCart({ id, product }: Props) {
  const { handleAddToCart, isButtonSelected } = useAddToCart({
    id,
    product,
    price: product.price,
  });

  return (
    <>
      <Button
        title={isButtonSelected ? "Added to cart" : "Add to cart"}
        onClick={handleAddToCart}
        isButtonSelected={isButtonSelected}
      />
    </>
  );
}
