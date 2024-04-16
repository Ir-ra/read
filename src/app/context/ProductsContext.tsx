"use client";
import { createContext, useContext, useEffect, useState } from "react";

import { getProducts } from "@/services/getAPI";

import { Product } from "../../types/Product";

type ContextItems = {
  products: Product[];
  loading: boolean;
};
export const ProductsContext = createContext<ContextItems>({
  products: [],
  loading: false,
});

type Props = {
  children: React.ReactNode;
};

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function fetchProducts() {
      try {
        const response = await getProducts();
        if (response) {
          setProducts(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}
