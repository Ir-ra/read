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

    if (value !== undefined) {
      params.set(key, value);
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
    setQueryParam("awaiting", awaiting);
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
