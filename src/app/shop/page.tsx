"use client"

import { usePathname } from "next/navigation";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { FiltersContainer } from "../components/FiltersBlock/FiltersContainer";
import { useState } from "react";

function Shop() {
  const pathname = usePathname();
  const nameBooks = 'Books';
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const filters = [
    {
      filterName: 'Category',
      isOpen : isOpenCategory,
      setOpen : setIsOpenCategory
    },
    {
      filterName: 'Sort by',
    isOpen : isOpenSort,
    setOpen : setIsOpenSort
  },
    {
      filterName: 'Filters',
      isOpen : isOpenFilter,
      setOpen : setIsOpenFilter
    }
  ]

  const handleClick = (filterName: string) => {
    if (filterName === 'Category') {
      setIsOpenCategory(prev=>!prev);
      setIsOpenSort(false);
      setIsOpenFilter(false);
    } else if (filterName === 'Sort by') {
      setIsOpenSort(prev=>!prev);
      setIsOpenCategory(false);
      setIsOpenFilter(false);
    } else if (filterName === 'Filters') {
      setIsOpenFilter(prev=>!prev);
      setIsOpenCategory(false);
      setIsOpenSort(false);
    }
  };

  return (
    <main className="px-6 py-10 tablet:px-10">
      <Breadcrumbs path={pathname} name={nameBooks} />

      <h1 className="mb-5 text-s tablet:text-sm desktop:text-l font-bold uppercase">
        {nameBooks}
      </h1>

      <div id='page-wrap' className="flex flex-col tablet:flex-row tablet:relative tablet:gap-10">
        {filters.map(el => (
          <FiltersContainer
            filterName={el.filterName}
            key={el.filterName}
            onClick={() => handleClick(el.filterName)}
            isOpen={el.isOpen}
          />
        ))}
      </div>
    </main>
  );
}

export default Shop;
