import { ChangeEvent } from "react";

export default function Range({ minPrice, maxPrice, handleFilterChange }: {
  minPrice: number;
  maxPrice: number;
  handleFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const minPercentage = ((minPrice) / 100) * 100;
  const maxPercentage = ((maxPrice) / 100) * 100;

  return (
    <div className="flex flex-col gap-2 w-52">

      <div className="flex justify-between text-xxxs font-light uppercase">
        <p>$ {minPrice}</p>
        <p>TO</p>
        <p>$ {maxPrice}</p>
      </div>

      <div className="relative">
        <div
          className="range-fill h-[2px] bg-green-500 absolute"
          style={{ left: `${minPercentage}%`, width: `${maxPercentage - minPercentage}%` }}
        ></div>

        <input
          type="range"
          className="custom-range-input "
          value={minPrice}
          min="0"
          max="100"
          step="1"
          onChange={handleFilterChange}
          data-type="minPrice"
        />

        <input
          type="range"
          className="custom-range-input "
          value={maxPrice}
          min="0"
          max="100"
          step="1"
          onChange={handleFilterChange}
          data-type="maxPrice"
        />
      </div>
    </div>
  )
}
