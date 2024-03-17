'use client'

import Image from "next/image";
import plug_book from "../../assets/img/plugs/plug_book.jpg";
import { Breadcrumbs } from "@/app/components/Breadcrumbs/Breadcrumbs";
import { usePathname } from "next/navigation";
import { Button } from "@/app/components/Button/Button";
import { getProduct } from '../../../services/getAPI';
import { useEffect, useState } from "react";


export default function Book({ params }: { params: { id: string } }) {
  const productsData = [
    {
      id: "1",
      category: "new",
      cover: "",
      autor: "Rebecca Yarros",
      bookName: "Fourth Wing",
      price: "36",
      new: "new",
      sale: false,
    },
    {
      id: "2",
      category: "Autograph",
      autor: "Rebecca Yarros",
      bookName: "The subtle art of not giving a fuck",
      price: "36",
      new: "coming soon",
      sale: false,
    },
    {
      id: "3",
      category: "18+",
      autor: "Rebecca Yarros",
      bookName: "Fourth Wing",
      price: "36",
      new: "coming soon",
      sale: false,
    },
    {
      id: "4",
      category: "18+",
      autor: "Rebecca Yarros",
      bookName: "Fourth Wing",
      price: "36",
      new: "new",
      sale: false,
    },
    {
      id: "5",
      category: "Autograph",
      autor: "Rebecca Yarros",
      bookName: "The subtle art of not giving a fuck",
      price: "36",
      new: "new",
      sale: false,
    },
    {
      id: "6",
      category: "New",
      autor: "Rebecca Yarros",
      bookName: "Fourth Wing",
      price: "36",
      new: "new",
      sale: false,
    },
    {
      id: "7",
      category: "Autograph",
      autor: "Rebecca Yarros",
      bookName: "The subtle art of not giving a fuck",
      price: "36",
      new: "new",
      sale: false,
    },
    {
      id: "8",
      category: "Autograph",
      autor: "Rebecca Yarros",
      bookName: "The subtle art of not giving a fuck",
      price: "36",
      new: "new",
      sale: false,
    },
    {
      id: "9",
      category: "Autograph",
      autor: "Rebecca Yarros",
      bookName: "The subtle art of not giving a fuck",
      price: "36",
      new: "new",
      sale: false,
    },
  ];
  const pathname = usePathname();
  const nameBooks = 'Books';

  const product = productsData.filter(p => p.id === params.id);
  // console.log('hh', product[0]);

  const [state, setState] = useState({});

  useEffect(() => {
    const prods = async () => {
      try {
        const product = await getProduct(params.id);
        if (product) {
          console.log('product', product);
          
          setState(product.data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    prods();
  }, [params.id])

  console.log('state', state);


  return (
    <main className="px-6 py-10 tablet:px-10">
      {/* details about book with id {params.id} */}
      <Breadcrumbs path={pathname.slice(0, -2)} name={nameBooks} bookName={product[0].bookName} />

      <h1>
        {product[0].bookName}
      </h1>

      <div>Rating</div>

      <div className="border border-Black p-4">
        <div className="flex mb-2 justify-between">
          <span className="px-1 py[2px]  border-Black border flex justify-center items-center">
            {product[0].category}
          </span>
          <button
            type="button"
            className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                d="M18.75 23.25L10 17L1.25 23.25V3.25C1.25 2.58696 1.51339 1.95107 1.98223 1.48223C2.45107 1.01339 3.08696 0.75 3.75 0.75H16.25C16.913 0.75 17.5489 1.01339 18.0178 1.48223C18.4866 1.95107 18.75 2.58696 18.75 3.25V23.25Z"
                stroke="#1C1C1C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="mb-2 tablet:mb-5">
          <div className={`relative h-[212px] tablet:w-[149px] tablet:h-[220px] mx-auto`}>
            <Image
              src={product[0].cover ? product[0].cover : plug_book}
              alt={product[0].bookName}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="50vw"
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <p>{product[0].price}</p>
        <p>{product[0].new}</p>
        <Button title='add to cart' />
      </div>

      <div>
        <div className="flex justify-between">
          <p className="font-bold">autor</p>
          <p>{product[0].autor}</p>
        </div>

        <div className="flex justify-between">
          <p>Publication year</p>
          <p></p>
        </div>

        <div className="flex justify-between">
          <p>Format</p>
          <p></p>
        </div>

        <div className="flex justify-between">
          <p>Cover</p>
          <p></p>
        </div>
      </div>
    </main>
  )
}
