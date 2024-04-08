'use client'
import { usePathname } from "next/navigation";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import CartOrder from "../components/CartOrder/CartOrder";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { HorizontalCard } from "../components/Card/HorizontalCard";

function Cart() {
  const pathname = usePathname();
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <main className="p-6 tablet:p-10">
      <div className="flex flex-col gap-4">
        <Breadcrumbs path={pathname} />
        <h1 className="mb-5 text-s tablet:text-sm desktop:text-l font-bold uppercase">
          Cart
        </h1>
      </div>

      <div className="flex">
        <div className="flex flex-col gap-6 tablet:gap-10">
          {cartItems && cartItems.map(cartItem => (
            <HorizontalCard
              book={cartItem.product}
              pathname={pathname}
              key={cartItem.id}
              removeFromCart={removeFromCart}
              cartItem={cartItem}
            />
          ))}
        </div>

        <CartOrder />
      </div>
    </main>
  );
}

export default Cart;