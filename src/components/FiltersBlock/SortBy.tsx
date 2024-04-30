"use client";

import { ChangeEvent } from "react";

import { useShop } from "@/app/context/ShopContext";

import { useLocalStorage } from "../../utils/useLocalStorage";
import FilterOptions from "./FilterOptions";

export const SortBy = ({ isOpen }: { isOpen?: boolean }) => {
  const [selectedOption, setSelectedOption] = useLocalStorage(
    "selectedSortOption",
    "Newest first"
  );

  const { setSortPrice, setSortNewest } = useShop();

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedOption(value);

    if (value === "Price: high to low") {
      setSortPrice("desc");
    }
    if (value === "Price: Low to high") {
      setSortPrice("asc");
    }
    if (value === "Newest first") {
      setSortNewest("asc");
    }
  };

  const sortByItems = [
    "Newest first",
    // "Popular first",
    "Top rated",
    "Price: high to low",
    "Price: Low to high",
  ];

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
  );
};
