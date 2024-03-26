'use client'

import { usePathname } from "next/navigation";
import { getProduct } from '../../../services/getAPI';
import { useEffect, useState } from "react";

import Loader from "@/app/components/Loader/Loader";
import ProductDetails from "@/app/components/ProductDetails/ProductDetails";

export default function Book({ params }: { params: { id: string } }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({});

  useEffect(() => {
    setLoading(true);
    const prods = async () => {
      try {
        const product = await getProduct(params.id);
        if (product) {
          setState(product.data)
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    prods();
  }, [params.id])

  console.log(state)
  return (
    <main className="px-6 py-10 tablet:px-10">
      {loading && <Loader />}

      {!loading && (
        <ProductDetails state={state} pathname={pathname} paramsID={params.id}/>
       )}
    </main>
  )
}
