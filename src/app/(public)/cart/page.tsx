import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import { CartItem } from "@/components/CartItem/CartItem";
import CartOrder from "@/components/CartOrder/CartOrder";

function Cart() {
  return (
    <>
      <main className="p-6 tablet:p-10">
        <div className="flex flex-col gap-4">
          <Breadcrumbs path="/cart" />
          <h1 className="mb-5 text-s tablet:text-sm desktop:text-l font-bold uppercase">
            Cart
          </h1>
        </div>

        <div className="flex flex-col gap-10 desktop:flex-row desktop:justify-center">
          <CartItem />

          <CartOrder />
        </div>
      </main>
    </>
  );
}

export default Cart;
