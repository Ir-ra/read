"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";

import { CartItem } from "../../types/CartItem";
import { useLocalStorage } from "../../utils/useLocalStorage";

const addItem = (cartItems: CartItem[], productToAdd: CartItem) => {
  const foundId = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (foundId) {
    return cartItems;
  }

  return [...cartItems, { ...productToAdd }];
};

const removeItem = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

interface Cart {
  cartItems: CartItem[];
  addToCart: (productToAdd: CartItem) => void;
  removeFromCart: (cartItemToRemove: CartItem) => void;
  plusItem: (cartItem: CartItem) => void;
  minusItem: (cartItem: CartItem) => void;
  cartCount: number;
  cartTotalPrice: number;
  cartTotal: number;
  checkAdded: (id: string) => boolean;
}

export const CartContext = createContext<Cart>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  plusItem: () => {},
  minusItem: () => {},
  cartCount: 0,
  cartTotalPrice: 0,
  cartTotal: 0,
  checkAdded: () => false,
});

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartTotalPrice, setCartTotalPrice] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total: number, cartItem: CartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total: number, cartItem: CartItem) =>
        total +
        (cartItem.product.special_price === 0
          ? cartItem.quantity * cartItem.price
          : cartItem.quantity * cartItem.product.special_price),
      0
    );

    setCartTotalPrice(newCartTotal);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotalNoSale = cartItems.reduce(
      (total: number, cartItem: CartItem) =>
        total +
        (cartItem.product.special_price !== 0
          ? cartItem.quantity * cartItem.price
          : cartItem.quantity * cartItem.product.special_price),
      0
    );

    setCartTotal(newCartTotalNoSale);
  }, [cartItems]);

  const addItemToCart = (productToAdd: CartItem) => {
    setCartItems((prevCartItems: CartItem[]) =>
      addItem(prevCartItems, productToAdd)
    );
  };

  const removeItemFromCart = (cartItemToRemove: CartItem) => {
    setCartItems((prevCartItems: CartItem[]) =>
      removeItem(prevCartItems, cartItemToRemove)
    );
  };

  const plusItem = (cartItem: CartItem) => {
    setCartItems((prevCartItems: CartItem[]) =>
      prevCartItems.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const minusItem = (cartItem: CartItem) => {
    setCartItems((prevCartItems: CartItem[]) =>
      prevCartItems.map((item) => {
        if (item.id === cartItem.id) {
          const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;

          return { ...item, quantity: newQuantity };
        }

        return item;
      })
    );
  };

  const checkAdded = (id: string) => {
    return cartItems.some((item: CartItem) => item.id === id);
  };

  const value: Cart = {
    cartItems,
    addToCart: addItemToCart,
    removeFromCart: removeItemFromCart,
    plusItem,
    minusItem,
    cartCount,
    cartTotalPrice,
    cartTotal,
    checkAdded,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
