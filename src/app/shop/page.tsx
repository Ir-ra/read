"use client"

import { usePathname } from "next/navigation";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { FiltersContainer } from "../components/FiltersBlock/FiltersContainer";
import { useMemo, useState } from "react";
import { VerticalCard } from "../components/Card/VerticalCard";
import Pagination from "../components/FiltersBlock/Pagination";
import { useProducts } from "../context/ProductsContext";

function Shop() {
  const pathname = usePathname();
  const nameBooks = 'Books';
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const filters = [
    {
      filterName: 'Category',
      isOpen: isOpenCategory,
      setOpen: setIsOpenCategory
    },
    {
      filterName: 'Sort by',
      isOpen: isOpenSort,
      setOpen: setIsOpenSort
    },
    {
      filterName: 'Filters',
      isOpen: isOpenFilter,
      setOpen: setIsOpenFilter
    }
  ]

  const handleClick = (filterName: string) => {
    if (filterName === 'Category') {
      setIsOpenCategory(prev => !prev);
      setIsOpenSort(false);
      setIsOpenFilter(false);
    } else if (filterName === 'Sort by') {
      setIsOpenSort(prev => !prev);
      setIsOpenCategory(false);
      setIsOpenFilter(false);
    } else if (filterName === 'Filters') {
      setIsOpenFilter(prev => !prev);
      setIsOpenCategory(false);
      setIsOpenSort(false);
    }
  };

  const {products} = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 8;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize ]);

  return (
    <main className="px-6 py-10 tablet:px-10">
      <div className="flex flex-col gap-4">
        <Breadcrumbs path={pathname} name={nameBooks} />
        <h1 className="mb-5 text-s tablet:text-sm desktop:text-l font-bold uppercase">
          {nameBooks}
        </h1>
      </div>

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

      <section className="pt-10 flex flex-col gap-10">
        <ul
          className="grid grid-cols-2 desktop:grid-cols-4 gap-5 scroll-smooth"
        >
          {currentTableData.map((product) => (
            <li key={product.id} className="flex m-auto w-full tablet:w-min">
              <VerticalCard product={product} />
            </li>
          ))}
        </ul>

        <Pagination
          currentPage={currentPage}
          totalCount={products.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </section>
    </main>
  );
}

export default Shop;
