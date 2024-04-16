'use client'
import { CartContext } from '@/app/context/CartContext';
import { useProducts } from '@/app/context/ProductsContext';

import React, { useContext, useState } from 'react'
import { Button } from './Button';

type Props = {
  prodId: string;
};

export default function AddToCart({ prodId }: Props) {
  const { addToCart, checkAdded } = useContext(CartContext);
  const { products } = useProducts();
  const [isButtonSelected, setIsButtonSelected] = useState(checkAdded(prodId));

  const handleAddToCart = () => {
    const product = products.find(p => p.id === prodId);

    if (product) {
      addToCart({
        id: prodId,
        product,
        quantity: 1,
        price: product.price,
      });

      setIsButtonSelected(true);
    }
  };

  return (
    <>
      <Button
        title={isButtonSelected ? 'Added to cart' : 'Add to cart'}
        onClick={handleAddToCart}
        isButtonSelected={isButtonSelected}
      />
    </>
  )
}
