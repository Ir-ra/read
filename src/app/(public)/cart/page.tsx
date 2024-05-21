import dynamic from "next/dynamic";

const Basket = dynamic(() => import("@/components/Cart/Cart"), { ssr: false });

function Cart() {
  return (
    <>
      <Basket />
    </>
  );
}

export default Cart;
