"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createContext, useCallback, useContext } from "react";

type SearchParams = {
  category?: string;
  sortBy?: string;
  filters?: string;
  format?: string;
  aviability?: boolean;
  priceStart?: string;
  priceEnd?: string;
  handleCurrentPage: (currPage: string) => void;
  setCategory: (category?: string | undefined) => void;
  setSortPrice: (price?: string | undefined) => void;
  setSortNewest: (order?: string | undefined) => void;
  setSortRating: (rating?: string | undefined) => void;
  setFilterComingSoon: (awaiting?: string | undefined) => void;
  setFilterBestsellers: (bestsellers?: string | undefined) => void;
  setFormat: (format?: string | undefined) => void;
  setStatus: (status?: string | undefined) => void;
  setPriceStart: (price_start?: string | undefined) => void;
  setPriceEnd: (price_end?: string | undefined) => void;
  resetFilters: () => void;
  setNew: (order?: string | undefined) => void;
  setSearchNav: (query?: string | undefined) => void;
  setAuthorName: (author_name?: string | undefined) => void;
};

export const ShopContext = createContext<SearchParams>({
  sortBy: "newest",
  filters: "new",
  format: "paper",
  aviability: true,
  priceStart: "0",
  priceEnd: "100",
  handleCurrentPage: () => {},
  setCategory: () => {},
  setSortPrice: () => {},
  setSortNewest: () => {},
  setSortRating: () => {},
  setFilterComingSoon: () => {},
  setFilterBestsellers: () => {},
  setFormat: () => {},
  setStatus: () => {},
  setPriceStart: () => {},
  setPriceEnd: () => {},
  resetFilters: () => {},
  setNew: () => {},
  setSearchNav: () => {},
  setAuthorName: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ShopProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setQueryParam = (
    key: string,
    value?: string | undefined,
    deleteKeys?: string[] | undefined
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    if (deleteKeys) {
      deleteKeys.forEach((deleteKey) => {
        if (params.has(deleteKey)) {
          params.delete(deleteKey);
        }
      });
    }

    if (value !== undefined && value !== "") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    if (key === "category" || key === "rating" || key === "price") {
      params.set("page", "1");
    }
    router.push(pathname + "?" + params.toString());
  };

  const handleCurrentPage = (currPage: string) => {
    setQueryParam("page", currPage);
  };

  const setCategory = (category?: string | undefined) => {
    setQueryParam("category", category);
  };

  const setSortPrice = (price?: string | undefined) => {
    setQueryParam("price", price, ["order", "rating"]);
  };

  const setSortNewest = (order?: string | undefined) => {
    setQueryParam("order", order, ["price", "rating"]);
  };

  const setSortRating = (rating?: string | undefined) => {
    setQueryParam("rating", rating, ["price", "order"]);
  };

  const setFilterComingSoon = (awaiting?: string | undefined) => {
    setQueryParam("awaiting", awaiting, ["bestsellers", "status", "new"]);
  };

  const setFilterBestsellers = (bestsellers?: string | undefined) => {
    setQueryParam("bestsellers", bestsellers, ["awaiting", "status", "new"]);
  };

  const setFormat = (format?: string | undefined) => {
    setQueryParam("filter", "format=" + format);
  };

  const setStatus = (status?: string | undefined) => {
    setQueryParam("status", status, ["awaiting", "bestsellers", "new"]);
  };

  const setNew = (order?: string | undefined) => {
    setQueryParam("order", order, ["awaiting", "bestsellers", "status"]);
  };

  const setPriceStart = (price_start?: string | undefined) => {
    setQueryParam("price_start", price_start);
  };

  const setPriceEnd = (price_end?: string | undefined) => {
    setQueryParam("price_end", price_end);
  };

  const setSearchNav = (query?: string | undefined) => {
    setQueryParam("query", query);
  };

  const setAuthorName = (author_name?: string | undefined) => {
    setQueryParam("author_name", author_name);
  };

  const resetFilters = () => {
    const paramsToDelete = [
      "format",
      "status",
      "price_start",
      "price_end",
      "bestsellers",
      "awaiting",
      "price_start",
      "price_end",
      "author_name",
    ];
    setQueryParam("", undefined, paramsToDelete);
  };

  return (
    <ShopContext.Provider
      value={{
        handleCurrentPage,
        setCategory,
        setSortPrice,
        setSortNewest,
        setSortRating,
        setFilterComingSoon,
        setFilterBestsellers,
        setFormat,
        setStatus,
        setPriceStart,
        setPriceEnd,
        resetFilters,
        setNew,
        setSearchNav,
        setAuthorName,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export function useShop() {
  const context = useContext(ShopContext);

  return context;
}
