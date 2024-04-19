"use client";
import { useContext, useState } from "react";

import { CartContext } from "@/app/context/CartContext";
import { Product } from "@/types/Product";

type Props = {
  id: string;
  product: Product;
  price: number;
};

const useAddToCart = ({ id, product, price }: Props) => {
  const { addToCart, checkAdded } = useContext(CartContext);
  const [isButtonSelected, setIsButtonSelected] = useState(checkAdded(id));

  const handleAddToCart = () => {
    addToCart({
      id,
      product,
      quantity: 1,
      price,
    });
    setIsButtonSelected(true);
  };

  return { handleAddToCart, isButtonSelected };
};

export default useAddToCart;
