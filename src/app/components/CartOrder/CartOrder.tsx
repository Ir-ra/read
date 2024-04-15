import { Button } from "../Button/Button";

export default function CartOrder() {


  return (
    <div className="flex flex-col bg-AccentBackground h-max border border-Black p-6 tablet:py-16 tablet:px-8 gap-10">
      <div className="flex justify-between">
        <p className="text-s tablet:text-cartL font-light uppercase">
          Total order
        </p>
        <p className="text-s tablet:text-cartL font-bold uppercase">
          $16
        </p>
      </div>

      <div>
        <h2 className="text-s tablet:text-cartL font-light uppercase">
          Promo Code
        </h2>
        <div className="flex gap-5">
          <input type="text" className="bg-AccentBackground w-full h-auto font-light box-border border-b border-Black placeholder:text-xxxs tablet:placeholder:text-xxs placeholder:text-Black placeholder:uppercase py-4 px-0 tablet:px-6 outline-none" />

          <div className=""><Button title="Add" /></div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-10 tablet:gap-5">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <p className="text-s tablet:text-cartL font-bold uppercase">
              Total discount
            </p>
            <p className="text-s tablet:text-cartL font-bold uppercase">
              -$16
            </p>
          </div>

          <h2 className="text-s tablet:text-cartL font-bold uppercase">
            Total to pay
          </h2>
          <div className="flex justify-between">
            <p className="flex items-end text-s tablet:text-cartL font-light uppercase">1pc</p>
            <p className="text-m tablet:text-l font-bold uppercase">$16</p>
          </div>
        </div>

        <Button title={'Submit order'} />
      </div>

    </div>
  )
}
