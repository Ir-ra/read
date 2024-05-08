import React, { Dispatch, SetStateAction } from "react";

import { FiltersContainer } from "./FiltersContainer";

type FiltersBlockType = {
  filters: {
    filterName: string;
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }[];
  onFilterClick: (filterName: string) => void;
  setCategoryName: Dispatch<SetStateAction<string>>;
};

export default function FiltersBlock({
  filters,
  onFilterClick,
  setCategoryName,
}: FiltersBlockType) {
  return (
    <div
      id="page-wrap"
      className="flex flex-col tablet:flex-row tablet:relative tablet:gap-10"
    >
      {filters.map((el) => (
        <FiltersContainer
          filterName={el.filterName}
          key={el.filterName}
          onClick={() => onFilterClick(el.filterName)}
          isOpen={el.isOpen}
          setCategoryName={setCategoryName}
        />
      ))}
    </div>
  );
}
