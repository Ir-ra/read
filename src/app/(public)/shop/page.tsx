"use client";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import FiltersBlock from "@/components/FiltersBlock/FiltersBlock";
import Pagination from "@/components/FiltersBlock/Pagination";
import Loader from "@/components/Loader/Loader";
import ProductList from "@/components/ProductList/ProductList";
import RecentlyViewed from "@/components/RecentlyViewed/RecentlyViewed";
import { getProducts } from "@/services/getAPI";

import { Product } from "../../../types/Product";
import { useLocalStorage } from "../../../utils/useLocalStorage";

function Shop() {
  const pathname = usePathname();
  const nameBooks = "Books";
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage(
    "recentlyViewed",
    []
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState("");

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

  // const { products, loading } = useSelector(selectProducts);

  let limit = 20;

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * pageSize;
  //   const lastPageIndex = firstPageIndex + pageSize;
  //   return products.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage, pageSize, products]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProducts(currentPage, limit);
        if (response) {
          setProducts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, [currentPage, limit]);

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
      {products.length === 0 && <Loader />}
      {products.length > 0 && (
        <>
          <div className="px-6 py-10 tablet:px-10">
            <div className="flex flex-col gap-4">
              <Breadcrumbs
                path={pathname}
                categoryName={categoryName}
                setCategoryName={setCategoryName}
              />
              <h1 className="mb-5 text-s tablet:text-sm desktop:text-l font-bold uppercase">
                {nameBooks}
              </h1>
            </div>

            <FiltersBlock
              filters={filters}
              onFilterClick={handleFilterClick}
              setProducts={setProducts}
              setCategoryName={setCategoryName}
            />
          </div>

          <section className="flex flex-col gap-10 px-6 pb-10 tablet:px-10">
            <ProductList
              currentTableData={products}
              onBookClick={onBookClick}
            />

            <Pagination
              currentPage={currentPage}
              // totalCount={products.length}
              totalCount={26}
              pageSize={limit}
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
