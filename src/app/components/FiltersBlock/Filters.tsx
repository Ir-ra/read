"use client";

import { ChangeEvent, useState } from "react";
import FilterOptions from "./FilterOptions";

export const Filters = ({ isOpen }: {
  isOpen?: boolean;
}) => {
  const filterByItems = ['New', 'sale', 'bestsellers', 'coming soon'];
  const filterByFormat = ['Paper', 'E-book'];
  const filterByAvailablet = ['available'];

  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedAvailable, setSelectedAvailable] = useState('');
  const [priceValue, setPriceValue] = useState(20);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = event.target;
    const type = dataset.type;
    const numericValue = parseInt(value);

    switch (type) {
      case 'filter':
        setSelectedFilter(value);
        break;
      case 'format':
        setSelectedFormat(value);
        break;
      case 'available':
        setSelectedAvailable(prevValue => prevValue === value ? '' : value);
        break;
      case 'price':
        setPriceValue(numericValue);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {isOpen && (
        <div className="flex flex-col tablet:flex-row w-full gap-4 tablet:gap-5">
          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-xxxs font-bold uppercase">
              Filters
            </h3>

            {filterByItems.map((item, i) => (
              <FilterOptions
                key={item}
                item={item}
                selectedFilter={selectedFilter}
                handleClick={handleFilterChange}
                i={i}
                type={"filter"}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-xxxs font-bold uppercase">
              Format
            </h3>

            {filterByFormat.map((format, i) => (
              <FilterOptions
                key={format}
                item={format}
                selectedFilter={selectedFormat}
                handleClick={handleFilterChange}
                i={i}
                type={"format"}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-xxxs font-bold uppercase">
              Availability
            </h3>

            {filterByAvailablet.map((available, i) => (
              <FilterOptions
                key={available}
                item={available}
                selectedFilter={selectedAvailable}
                handleClick={handleFilterChange}
                i={i}
                type={"available"}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-xxxs font-bold uppercase">
              Price
            </h3>

            <div className="flex flex-col gap-2 w-52">
              <div className="flex justify-between text-xxxs font-light uppercase">
                <p>$ 0</p>
                <p>TO</p>
                <p>$ {priceValue}</p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={priceValue}
                onChange={handleFilterChange}
                data-type="price"
                className="appearance-none w-full h-[1px] bg-black rounded-md outline-none focus:outline-none custom-range-input"
                style={{ background: 'linear-gradient(90deg, black ' + priceValue + '%, #CBD5E0 ' + priceValue + '%)' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}