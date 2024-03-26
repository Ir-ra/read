'use client'

import { usePathname } from "next/navigation";
import { getProduct, getReviewById } from '../../../services/getAPI';
import { useEffect, useState } from "react";

import Loader from "@/app/components/Loader/Loader";
import ProductDetails from "@/app/components/ProductDetails/ProductDetails";

interface Review {
  rating: number;
};

export default function Book({ params }: { params: { id: string } }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({});
  const [review, setReview] = useState<Review[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const [product, reviewData] = await Promise.all([
          getProduct(params.id),
          getReviewById(params.id)
        ]);
        if (product) {
          setState(product.data);
        }
        if (reviewData) {
          setReview(reviewData.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <main className="px-6 py-10 tablet:px-10">
      {loading && <Loader />}

      {!loading && (
        <ProductDetails state={state} pathname={pathname} paramsID={params.id} review={review.length > 0 ? review[0].rating : 2}/>
       )}
    </main>
  )
}
