"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type SearchParams = {
  // page: string;
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
};

export const ShopContext = createContext<SearchParams>({
  // page: "1",
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
});

type Props = {
  children: React.ReactNode;
};

export const ShopProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const page = searchParams.get("page") || "1";

  const createQueryString = useCallback(
    (name: string, value?: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value) {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  const handleCurrentPage = (currPage: string) => {
    if (searchParams.get("page") !== currPage) {
      router.push(pathname + "?" + createQueryString("page", currPage));
    }
    // const params = new URLSearchParams(searchParams.toString());
    // params.set("page", currPage);
    // router.push(pathname + "?" + params.toString());
  };

  const setCategory = (category?: string | undefined) => {
    if (searchParams.get("category") !== category) {
      router.push(pathname + "?" + createQueryString("category", category));
    }
  };

  const setQueryParam = (
    key: string,
    value?: string | undefined,
    deleteKey?: string | undefined
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value !== undefined && params.get(key) !== value) {
      params.set(key, value);
    }
    if (deleteKey !== undefined && params.has(deleteKey)) {
      params.delete(deleteKey);
    }
    router.push(pathname + "?" + params.toString());
  };

  const setSortPrice = (price?: string | undefined) => {
    setQueryParam("price", price, "order");
  };

  const setSortNewest = (order?: string | undefined) => {
    setQueryParam("order", order, "price");
  };

  return (
    <ShopContext.Provider
      value={{
        handleCurrentPage,
        setCategory,
        setSortPrice,
        setSortNewest,
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
