import dynamic from "next/dynamic";
import { Suspense } from "react";

const Basket = dynamic(() => import("@/components/Cart/Cart"), { ssr: false });

function Cart() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Basket />
      </Suspense>
    </>
  );
}

export default Cart;
