"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useShop } from "@/app/context/ShopContext";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import FiltersBlock from "@/components/FiltersBlock/FiltersBlock";
import Pagination from "@/components/FiltersBlock/Pagination";
import Loader from "@/components/Loader/Loader";
import ProductList from "@/components/ProductList/ProductList";
import RecentlyViewed from "@/components/RecentlyViewed/RecentlyViewed";
import {
  getBestsellers,
  getComingSoon,
  getProducts,
  getProductsByCategory,
} from "@/services/getAPI";

import { Product } from "../../../types/Product";
import { useLocalStorage } from "../../../utils/useLocalStorage";

function Shop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage(
    "recentlyViewed",
    []
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState("");
  const { handleCurrentPage } = useShop();
  const page = searchParams.get("page") || "1";
  let limit = 20;

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

  useEffect(() => {
    async function fetchProducts() {
      try {
        const price = searchParams.get("price");
        const order = searchParams.get("order");
        const rating = searchParams.get("rating");
        const filter = searchParams.get("format");
        const status = searchParams.get("status");
        const price_start = searchParams.get("price_start");
        const price_end = searchParams.get("price_end");
        const page = searchParams.get("page") || "1";

        if (searchParams.has("category")) {
          const category = await getProductsByCategory(
            searchParams.get("category"),
            page,
            limit,
            price,
            order,
            status
          );
          setProducts(category.data);
        } else if (searchParams.has("awaiting")) {
          const soon = await getComingSoon(page, limit, price, order, rating);
          console.log("soon.data", soon.data);

          setProducts(soon.data);
        } else if (searchParams.has("bestsellers")) {
          const bestsellers = await getBestsellers(
            page,
            limit,
            price,
            order,
            rating
          );
          console.log("bestsellers.data", bestsellers.data);

          setProducts(bestsellers.data);
        } else if (searchParams.has("filter")) {
          const products = await getProducts(
            page,
            limit,
            price,
            order,
            rating,
            filter,
            status,
            price_start,
            price_end
          );
          console.log("products status", products.data);

          setProducts(products.data);
        } else if (searchParams.has("price_start")) {
          const products = await getProducts(
            page,
            limit,
            price,
            order,
            rating,
            filter,
            status,
            price_start,
            price_end
          );
          console.log("products status", products.data);

          setProducts(products.data);
        } else {
          const response = await getProducts(
            page,
            limit,
            price,
            order,
            rating,
            filter,
            status,
            price_start,
            price_end
          );

          if (response) {
            setProducts(response.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, [searchParams, limit, pathname]);

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
                Books
              </h1>
            </div>

            <FiltersBlock
              filters={filters}
              onFilterClick={handleFilterClick}
              setCategoryName={setCategoryName}
            />
          </div>

          <section className="flex flex-col gap-10 px-6 pb-10 tablet:px-10">
            <ProductList
              currentTableData={products}
              onBookClick={onBookClick}
            />

            <Pagination
              currentPage={page}
              // totalCount={products.length}
              totalCount={26}
              pageSize={limit}
              onPageChange={(p) => handleCurrentPage(p)}
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
