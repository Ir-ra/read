"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import { VerticalCard } from "@/components/Card/VerticalCard";
import FiltersBlock from "@/components/FiltersBlock/FiltersBlock";
import { FiltersContainer } from "@/components/FiltersBlock/FiltersContainer";
import Pagination from "@/components/FiltersBlock/Pagination";
import Loader from "@/components/Loader/Loader";
import ProductList from "@/components/ProductList/ProductList";
import { ProductsCarousel } from "@/components/ProductsCarousel/ProductsCarousel";
import RecentlyViewed from "@/components/RecentlyViewed/RecentlyViewed";
import Title from "@/components/Title/Title";

import { Product } from "../../../types/Product";
import { useLocalStorage } from "../../../utils/useLocalStorage";
import { useProducts } from "../../context/ProductsContext";

function Shop() {
  const pathname = usePathname();
  const nameBooks = "Books";
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const filters = [
    {
      filterName: "Category",
      isOpen: isOpenCategory,
      setOpen: setIsOpenCategory,
    },
    {
      filterName: "Sort by",
      isOpen: isOpenSort,
      setOpen: setIsOpenSort,
    },
    {
      filterName: "Filters",
      isOpen: isOpenFilter,
      setOpen: setIsOpenFilter,
    },
  ];

  const handleFilterClick = (filterName: string) => {
    if (filterName === "Category") {
      setIsOpenCategory((prev) => !prev);
      setIsOpenSort(false);
      setIsOpenFilter(false);
    } else if (filterName === "Sort by") {
      setIsOpenSort((prev) => !prev);
      setIsOpenCategory(false);
      setIsOpenFilter(false);
    } else if (filterName === "Filters") {
      setIsOpenFilter((prev) => !prev);
      setIsOpenCategory(false);
      setIsOpenSort(false);
    }
  };

  const { products, loading } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage(
    "recentlyViewed",
    []
  );
  let pageSize = 8;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, products]);

  const onBookClick = (product: Product) => {
    const isProductInRecentlyViewed = recentlyViewed.some(
      (item: Product) => item.id === product.id
    );

    if (!isProductInRecentlyViewed) {
      const updatedRecentlyViewed = [...recentlyViewed];

      if (updatedRecentlyViewed.length >= 4) {
        updatedRecentlyViewed.pop();
      }

      updatedRecentlyViewed.unshift(product);
      setRecentlyViewed(updatedRecentlyViewed);
    }
  };

  return (
    <main>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="px-6 py-10 tablet:px-10">
            <div className="flex flex-col gap-4">
              <Breadcrumbs path={pathname} name={nameBooks} />
              <h1 className="mb-5 text-s tablet:text-sm desktop:text-l font-bold uppercase">
                {nameBooks}
              </h1>
            </div>

            <FiltersBlock filters={filters} onFilterClick={handleFilterClick} />
          </div>

          <section className="flex flex-col gap-10 px-6 pb-10 tablet:px-10">
            <ProductList
              currentTableData={currentTableData}
              onBookClick={onBookClick}
            />

            <Pagination
              currentPage={currentPage}
              totalCount={products.length}
              pageSize={pageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </section>

          {!!recentlyViewed.length && (
            <RecentlyViewed recentlyViewed={recentlyViewed} />
          )}
        </>
      )}
    </main>
  );
}

export default Shop;
