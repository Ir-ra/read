"use client";

import { usePathname } from "next/navigation";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { FilterButton } from "../components/FiltersBlock/FilterButton";
import { useState } from "react";

function Shop() {
  const pathname = usePathname();
  const nameBooks = 'Books';

  const filterNames = ['Category', 'Sort by', 'Filters'];
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleClick = (filterName: string) => {
    setSelectedFilter(filterName);
  };

  return (
    <main className="px-6 py-10 tablet:px-10">
      <Breadcrumbs path={pathname} name={nameBooks} />

      <h1 className="mb-5 text-s tablet:text-sm desktop:text-l font-bold uppercase">{nameBooks}</h1>

      <div id='page-wrap' className="flex flex-col tablet:flex-row tablet:relative">
        {filterNames.map(filterName => (
          <FilterButton
            filterName={filterName}
            key={filterName}
            onClick={handleClick}
            isOpen={selectedFilter === filterName}
          />
        ))}
      </div>
    </main>
  );
}

export default Shop;