"use client";

import { ChangeEvent } from "react";
import FilterOptions from "./FilterOptions";
import { useLocalStorage } from "@/app/utils/useLocalStorage";
import Range from "./Range";

export const Filters = ({ isOpen }: {
  isOpen?: boolean;
}) => {
  const filterByItems = ['New', 'sale', 'bestsellers', 'coming soon'];
  const filterByFormat = ['Paper', 'E-book'];
  const filterByAvailablet = ['available'];

  const [selectedFilter, setSelectedFilter] = useLocalStorage('selectedFilter', '');
  const [selectedFormat, setSelectedFormat] = useLocalStorage('selectedFormat', '');
  const [selectedAvailable, setSelectedAvailable] = useLocalStorage('selectedAvailable', '');
  const [minPrice, setMinPrice] = useLocalStorage('minPrice', 0);
  const [maxPrice, setMaxPrice] = useLocalStorage('maxPrice', 100);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = event.target;
    const type = dataset.type;
    const numericValue = parseInt(value);

    switch (type) {
      case 'filter': setSelectedFilter(value);
        break;

        case 'format': setSelectedFormat(value);
        break;

      case 'available': setSelectedAvailable(value);
        break;

      case 'minPrice':
        if (numericValue <= maxPrice) {
          setMinPrice(numericValue);
        }
        break;

      case 'maxPrice':
        if (numericValue >= minPrice) {
          setMaxPrice(numericValue);
        }
        break;

      default:
        break;
    }
  };

  const clear = () => {
    setSelectedFilter('');
    setSelectedFormat('');
    setSelectedAvailable('');
    setMinPrice(0);
    setMaxPrice(100);
  };

  return (
    <>
      {isOpen && (
        <>
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
              <Range
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleFilterChange={handleFilterChange}
              />
            </div>
          </div>

          <p onClick={clear} className="text-xxxs font-light uppercase underline cursor-pointer">
            Reset all filters
          </p>
        </>
      )}
    </>
  )
}
