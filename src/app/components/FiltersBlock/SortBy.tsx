"use client"

import { ChangeEvent, useEffect, useState } from "react";
import FilterOptions from "./FilterOptions";
import { useLocalStorage } from '../../utils/useLocalStorage';

export const SortBy = ({ isOpen }: {
  isOpen?: boolean;
}) => {
  const [selectedOption, setSelectedOption] = useLocalStorage('selectedSortOption', '');

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedOption(value);
  };

  const sortByItems = ['Newest first', 'Popular first', 'Top rated', 'Price: high to low', 'Price: Low to high'];

  return (
    <>
      {isOpen && (
        <div className=" grid grid-cols tablet:grid-cols-2 gap-2 w-full tabled:w-2/5 desktop:w-full tablet:justify-between mb-2">
          {sortByItems.map((item, i) => (
            <FilterOptions
              key={item}
              item={item}
              selectedFilter={selectedOption}
              handleClick={handleSortChange}
              i={i}
              type={"sort"}
            />
          ))}
        </div>
      )}
    </>
  )
}
